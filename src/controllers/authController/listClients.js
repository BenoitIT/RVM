import db from "../../database/models";
import { asyncWrapper } from "../../utilities/BetterCodingPractice/handlingTryCatch";
export const getAllClients = asyncWrapper(async (req, res) => {
  const clients = await db.Users.findAll({
    where: {
      role: "client",
    },
    attributes: { exclude: ['password', 'role'] }
  });
  if (!clients)
    return res
      .status(404)
      .json({ status: req.t("fail"), message: req.t('noClient') });
  res
    .status(200)
    .json({
      status: req.t("success"),
      data: clients,
      message: req.t('listClient'),
    });
});
