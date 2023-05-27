import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
//adding new recyclables
export const saveNewRecyclable = asyncWrapper(async (req, res) => {
  const { Location, zone, numberOfRecyclables, bootleType } = req.body;
  const userId = req.user.id;
  const reward = await db.Rewards.findOne({
    where: {
      bottleType: bootleType,
    },
  });
  if(!reward){
   return res.status(404).json({status:"fail",message:"could not support that type of of bottle"})
  } 
  const rewardPerEach = reward.rewardPerEach;
  const FillingError = checkEmptyFields(req, res);
  if (FillingError) return;
  const totalRewards = rewardPerEach * numberOfRecyclables;
  const isBalanceExist= await db.Balances.findOne({where:{userId}});
  console.log(isBalanceExist.balance);
  let balances;
  if(isBalanceExist){
    isBalanceExist.balance=isBalanceExist.balance+totalRewards;
   balances = await isBalanceExist.save();
  }else{
   balances= await db.Balances.create({
    userId,
    balance: totalRewards
  })
}
  await db.Recyclables.create({
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
    .json({
      status: req.t("success"),
      message:
        numberOfRecyclables + " " + bootleType + " " + req.t("hasRecycled"),
      data:balances,
    });
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
  const userId = req.user.id;
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
    .json({ status: req.t("success"), message: req.t("removed"),data:RecyclablesStat });
});
