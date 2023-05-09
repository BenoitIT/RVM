import db from "../../database/models";
import { sequelize } from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
export const getLocation = asyncWrapper(async (req, res) => {
    const locationList = await db.Machines.findAll(
        {attributes: [[sequelize.fn('DISTINCT', sequelize.col('Location')), 'Location']]}
    );
    if (!locationList)
      return res
        .status(404)
        .json({ status: req.t("fail"), message: req.t("noLocation") });
    res.status(200).json({
      status: req.t("success"),
      data: locationList ,
      message: req.t("listLocation"),
    });
  });
