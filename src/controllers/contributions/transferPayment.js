import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
 const transferPayment = asyncWrapper(async (req, res) => {
  const { transferredAmount } = req.body;
  const userId = req.user.id;
  const isBalanceExist = await db.Balances.findOne({ where: { userId } });
  if (isBalanceExist && isBalanceExist.balance > transferredAmount) {
    isBalanceExist.balance = isBalanceExist.balance - transferredAmount;
    const balance = await isBalanceExist.save();
    res.status(201).json({
      status: req.t("success"),
      message: "cash recieved ..your remaining balance is " + balance.balance,
      data: balance,
    });
  } else {
    res.status(403).json({
      status: req.t("fail"),
      message: "insufficient balance",
    });
  }
});
export default transferPayment;
