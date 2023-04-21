import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
import {
  comparePassword,
  signToken,
} from "../../utilities/validations/handlingPasswordVerification";
import { payLoad } from "../../utilities/BetterCodingPractice/tokenPayload";
export const authenticate = asyncWrapper(async (req, res) => {
  const { phoneNumber, password } = req.body;
  const FillingError = checkEmptyFields(req, res);
  if (!FillingError) {
    const user = await db.Users.findOne({
      where: {
        phoneNumber,
      },
    });
    if (!user)
      return res
        .status(404)
        .json({ status: req.t("fail"), message: req.t("noClient") });
    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect)
      return res.status(403).json({ status:req.t("fail"),message:req.t("incorrectPassword") });
    const accessToken = await signToken(payLoad(user));
    res
      .status(200)
      .json({
        status: req.t("success"),
        message: req.t("welcome"),
        data: accessToken,
      });
  }
});
