import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import {
  checkmachineDeplucation,
  checkExistance,
  checkOPExistance,
} from "../../utilities/BetterCodingPractice/validateNumber";
export const updateMachinesInfo = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { zone, operatorId, gps_longitude, gps_latitude } = req.body;
  const machine = await db.Machines.findOne({
    where: {
      id,
    },
  });
  if (!machine)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noMachine") });
  const error = await checkmachineDeplucation(
    db.Machines,
    gps_longitude,
    gps_latitude,
    req,
    res
  );
  if (error) return;
  const checkZoneExistance = await checkExistance(db.Machines, zone, req, res);
  if (checkZoneExistance) return;
  const Operator = await checkOPExistance(db.Machines, operatorId, req, res);
  if (Operator) return;
  machine.Location = req.body.Location;
  machine.zone = zone;
  machine.status = req.body.status;
  machine.operatorId = operatorId;
  machine.gps_longitude = gps_longitude;
  machine.gps_latitude = gps_latitude;
  await machine.save();
  return res
    .status(200)
    .json({ status: req.t("success"), message: req.t("updateSucess") });
});

export const getSingleMachinesInfo = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const machine = await db.Machines.findByPk(id, {
    include: [
      {
        model: db.Operators,
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "lastName",
            "lastName",
            "phoneNumber",
            "nationalID",
            "id",
          ],
        },
      },
    ],
  });
  if (!machine)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noMachine") });
  return res.status(200).json({
    status: req.t("success"),
    data: machine,
  });
});

export const deleteSingleMachinesInfo = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const machine = await db.Machines.findOne({
    where: {
      id,
    },
  });
  if (!machine)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noMachine") });
  await machine.destroy();
  return res.status(200).json({
    status: req.t("success"),
    message: req.t("deleteSucess"),
  });
});
