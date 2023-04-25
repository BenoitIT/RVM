import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";

export const getAllMachines = asyncWrapper(async (req, res) => {
  const machineList = await db.Machines.findAll({
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
          ],
        },
      },
    ],
  });
  if (!machineList)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noMachine") });
  res.status(200).json({
    status: req.t("success"),
    data: machineList,
    message: req.t("listMachine"),
  });
});
export const getAllOperators = asyncWrapper(async (req, res) => {
  const OPeratorsList = await db.Operators.findAll({});
  if (!OPeratorsList)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noOperator") });
  res.status(200).json({
    status: req.t("success"),
    data: OPeratorsList,
    message: req.t("listOfOperators"),
  });
});
