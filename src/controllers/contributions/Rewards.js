import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
import { checkEmptyFields } from "../../utilities/validations/handlingEmptyFields";
export const defineRewards = asyncWrapper(async (req, res) => {
  const { bottleType, rewardPerEach } = req.body;
  const errors = checkEmptyFields(req, res);
  if (errors) return;
  const rewards = await db.Rewards.create({
    bottleType,
    rewardPerEach,
  });
  res.status(201).json({
    status: req.t("success"),
    message: "rewords infor saved!",
    data: rewards,
  });
});

export const getAllRewordsInfo = asyncWrapper(async (req, res) => {
  const RewardsInfo = await db.Rewards.findAll({});
  res.status(200).json({
    status: req.t("success"),
    data: RewardsInfo,
  });
});

export const getSingleRewordInfo = asyncWrapper(async (req, res) => {
  const { bottleType } = req.params;
  const RewardInfo = await db.Rewards.findOne({
    where: {
        bottleType,
    },
  });
  res.status(200).json({
    status: req.t("success"),
    data: RewardInfo,
  });
});

export const updateRewardInfo = asyncWrapper(async (req, res) => {
  const { bottleType } = req.params;
  const { rewardPerEach } = req.body;
  const RewardInfo = await db.Rewards.findOne({
    where: {
    bottleType,
    },
  });
  if (!RewardInfo)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: "no reward info" });
  RewardInfo.rewardPerEach = rewardPerEach;
  await RewardInfo.save();
  return res
    .status(200)
    .json({ status: req.t("success"), message: req.t("updateSucess") });
});
