import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
import {
  checkmachineDeplucation,
  checkExistance,
} from "../../utilities/BetterCodingPractice/validateNumber";
export const registerNewMachine= asyncWrapper(async (req, res) => {
  const { Location, zone, status, operatorId, gps_longitude, gps_latitude } =
    req.body;
  const FillingErrors = checkEmptyFields(req, res);
  if (!FillingErrors) {
    const error = await checkmachineDeplucation(
      db.Machines,
      gps_longitude,
      gps_latitude,
      req,
      res
    );
    if (error) return;
    const checkZoneExistance = await checkExistance(
      db.Machines,
      zone,
      req,
      res
    );
    if (checkZoneExistance) return;
    const newMachine = await db.Machines.create({
        Location, zone, status, operatorId, gps_longitude, gps_latitude
    });
    res.status(201).json({
      status: req.t("success"),
      data: newMachine,
      message: req.t("machineregistered"),
    });
  }
});
