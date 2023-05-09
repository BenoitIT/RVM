import dotenv from "dotenv";
import { checkToken } from "../utilities/validations/validateToken";
dotenv.config();

export const auth = (arg) => {
  return async (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader)
      return res.status(403).json({
        status: req.t("fail"),
        message: req.t("unauthorized"),
      });
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    const result = await checkToken(token);
    if (!result)
      return res.status(401).json({
        status: req.t("fail"),
        message: req.t("unauthorized"),
      });
    const role = result?.user.role;
    req.user = result?.user;
    if (arg.includes(role)) return next();
    else {
      if (arg !== "all") {
        return res.status(401).json({
          status: req.t("fail"),
          message: req.t("wrong_credentials"),
        });
      }
      next();
    }
  };
};
