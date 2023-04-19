import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
import bcrypt from "bcrypt";
export const registerNewClient = (role) => {
  return asyncWrapper(async (req, res) => {
    //recieving inputs from response object
    const { firstName, lastName, Nationality, email, phoneNumber, password } =
      req.body;
    //checking whether every input is valid
    const fillingErrors = checkEmptyFields(req, res);
    if (!fillingErrors) {
      // Check if user with phone already exists
      const existingUser = await db.Users.findOne({ where:{
        phoneNumber }
      });
      if (existingUser) {
        return res.status(409).json({
          status: req.t("fail"),
          message: req.t("user_exixted_error"),
        });
      }
      const userPassword = await bcrypt.hash(password, 10);
      const newClient = await db.Users.create({
        firstName,
        lastName,
        Nationality,
        email,
        phoneNumber,
        password: userPassword,
        role: role,
      });
      res.status(201).json({
        status: req.t("success"),
        data: newClient,
        message: req.t("registered"),
      });
    }
  });
};
