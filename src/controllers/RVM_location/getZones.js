import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
export const getZoneBylocation = asyncWrapper(async (req, res) => {
    const { Location } = req.params;
    const ZonesList= await db.Machines.findAll({
        attributes: ['zone'],
      where: {
        Location
      },
    });
    if (!ZonesList)
      return res
        .status(404)
        .json({ status: req.t("fail"), message: req.t("noZone") });
    return res.status(200).json({
      status: req.t("success"),
      data: ZonesList,
      message: req.t("listZone"),
    });
  });