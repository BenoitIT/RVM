import db from "../../database/models";
import dotenv from "dotenv";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
dotenv.config();
export const loginWithGoogle = asyncWrapper(async (req, res) => {
  const { user, token } = req.user;
  const existingUser = await db.Users.findOne({ where: { email: user.email } });
  if (!existingUser) {
    res.status(404).json({ status: req.t("fail"), message: req.t("noClient") });
    return;
  }
  res.set("Authorization", `Bearer ${token}`);
  return res.status(200).json({ status: req.t("success"), data: token });
});
