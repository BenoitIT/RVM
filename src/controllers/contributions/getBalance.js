import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
 const getMyBalance = asyncWrapper(async (req, res) => {
  const userId = req.user.id;
  const isBalanceExist = await db.Balances.findOne({ where: { userId } });
  if (isBalanceExist && isBalanceExist.balance) {
    res.status(200).json({
        status: req.t("success"),
         data:isBalanceExist.balance,
      });
  } else {
    res.status(204).json({
      status: req.t("fail"),
      message: "no balance found",
    });
  }
});
export default getMyBalance;