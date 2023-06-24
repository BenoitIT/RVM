import db from "../../database/models";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { generateRandomResetcode } from "../../utilities/BetterCodingPractice/generateCodes";
import { comparePassword } from "../../utilities/validations/handlingPasswordVerification";
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNTID;
const authToken = process.env.TWILIO_AUTHTOKEN;
const client = require("twilio")(accountSid, authToken);

export const sendCode = asyncWrapper(async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  console.log(phoneNumber);
  const resetCode = generateRandomResetcode();
  const code = await bcrypt.hash(resetCode, 10);
  const user = await db.Users.findOne({
    where: {
      phoneNumber,
    },
  });
  if (!user)
    return res.status(404).json({
      status: "failed",
      message: "none registered with that phone number",
    });
  user.resetCode = code;
  await user.save();
  const message = await client.messages.create({
    body: `your password reset key is ${resetCode}`,
    from: process.env.TWILIO_PHONENUMBER,
    to: `+25${phoneNumber}`,
  });
  if (message) {
    return res.status(200).json({
      status: "success",
      message: "reset password sent to phone successfully",
    });
  }
  if (!message) {
    return res.status(200).json({
      status: "failed",
      message: "could not reach to the recipient",
    });
  }
});

export const VerifyResetCode = asyncWrapper(async (req, res) => {
  const { resetCode, phoneNumber } = req.body;
  const user = await db.Users.findOne({
    where: {
      phoneNumber,
    },
  });
  const isCodeCorrect = await comparePassword(resetCode, user.resetCode);
  if (!isCodeCorrect)
    return res.status(404).json({
      status: "failed",
      message: "the code provided is incorrect",
    });
  res.status(200).json({
    status: "success",
  });
});

export const ResetPassword = asyncWrapper(async (req, res) => {
  const { newPassword, phoneNumber } = req.body;
  const user = await db.Users.findOne({
    where: {
      phoneNumber,
    },
  });
  if (!user)
    return res.status(404).json({
      status: "failed",
      message: "none registered with that phone number",
    });
  const userPassword = await bcrypt.hash(newPassword, 10);
  user.password = userPassword;
  await user.save();
  res.status(200).json({
    status: "success",
    message: "new password created successfully",
  });
});
