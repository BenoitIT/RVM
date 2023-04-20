import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { validateIntegerLength ,checkDeplucation} from "../../utilities/BetterCodingPractice/validateNumber";
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
      const PhNumber = validateIntegerLength(phoneNumber, 10);
      if (!PhNumber)
        return res.status(409).json({
          status: req.t("fail"),
          message: req.t('incorrectPhoneNumber'),
        });
      const phone = phoneNumber;
      const error= await checkDeplucation(db.Users,phone,email,req,res);
      if(error)
        return
      const userPassword = await bcrypt.hash(password, 10);
      const newClient = await db.Users.create({
        firstName,
        lastName,
        Nationality,
        email,
        phoneNumber: phone,
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
