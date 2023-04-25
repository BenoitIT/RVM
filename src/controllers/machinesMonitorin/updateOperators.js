import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
export const updateOperatorInfo = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phoneNumber, nationalID } = req.body;
  const operator = await db.Operators.findOne({
    where: {
      id,
    },
  });
  if (!operator)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noOperator") });
  operator.firstName = firstName;
  operator.lastName = lastName;
  operator.phoneNumber = phoneNumber;
  operator.nationalID = nationalID;
  await operator.save();
  return res
    .status(200)
    .json({ status: req.t("success"), message: req.t("updateSucess") });
});

export const getSingleOperatorInfo = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const Operator = await db.Operators.findByPk(id, {
    include: [
      {
        model: db.Machines,
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "operatorId",
            "gps_longitude",
            "gps_latitude",
            "id",
          ],
        },
      },
    ],
  });
  if (!Operator)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("noOperator") });
  return res.status(200).json({
    status: req.t("success"),
    data: Operator,
  });
});


