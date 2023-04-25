import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
import { validateIntegerLength ,checkIDDeplucation} from "../../utilities/BetterCodingPractice/validateNumber";
 export const registerNewOperator = asyncWrapper(async (req, res) => {
  const { firstName, lastName, phoneNumber, nationalID } = req.body;
  const FillingErrors=checkEmptyFields(req,res);
  if(!FillingErrors){
    //validate identity number
    const completeID = validateIntegerLength(nationalID, 16);
    if (!completeID)
      return res.status(409).json({
        status: req.t("fail"),
        message: req.t('incorrectIDNumber'),
      });
    //validate phone number
    const PhNumber = validateIntegerLength(phoneNumber, 10);
    if (!PhNumber)
      return res.status(409).json({
        status: req.t("fail"),
        message: req.t('incorrectPhoneNumber'),
      });
    const phone = phoneNumber;
    // Check if operator with phone and national id already exists
    const error= await checkIDDeplucation(db.Operators,phone,nationalID,req,res);
    if(error)
      return
      const RegOperator = await db.Operators.create({
        firstName,
        lastName,
        phoneNumber: phone,
        nationalID,
      });
      res.status(201).json({
        status: req.t("success"),
        data: RegOperator,
        message: req.t("operatorRegistered"),
      });
  }
});
