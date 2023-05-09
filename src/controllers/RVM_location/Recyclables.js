import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
//adding new recyclables
export const saveNewRecyclable = asyncWrapper(async (req, res) => {
  const { Location, zone, rewardPerEach,numberOfRecyclables,bootleType } =
    req.body;
  const userId = req.user.id;
  const FillingError = checkEmptyFields(req, res);
  if (FillingError) return;
  const totalRewards=rewardPerEach * numberOfRecyclables ;
  const newRecyclable = await db.Recyclables.create({
    Location,
    zone,
    bootleType,
    userId,
    numberOfRecyclables,
    rewardPerEach,
    totalRewards,
  });
  res
    .status(201)
    .json(
      { status: req.t("success"),
      message:numberOfRecyclables+" "+bootleType+" "+req.t("hasRecycled")}
    );
});
//getting all reylables STATS
export const getMyRecyclingStats = asyncWrapper(async (req, res) => {
  const userId = req.user.id;
  const RecyclablesStats = await db.Recyclables.findAll({
    where: {
      userId: userId,
    },
  });
  if (!RecyclablesStats)
    return res.status(404).json({
      status: req.t("fail"),
      message: request.t("Nocontribution"),
    });
  res.status(200).json({
    status: req.t("success"),
    data: RecyclablesStats,
    message: req.t("contributions"),
  });
});
//delete an existing RECYCLABLE Stast
export const removeRecyclables = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const userId=req.user.id;
  const RecyclablesStat = await db.Recyclables.findOne({
    where: {
      userId: userId,
      id: id,
    },
  });
  if (!RecyclablesStat)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t("notFound") });
      RecyclablesStat.destroy();
      return res
      .status(200)
      .json({ status: req.t("success"), message: req.t("removed") });
});
