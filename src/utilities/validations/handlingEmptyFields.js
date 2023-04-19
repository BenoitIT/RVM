export const checkEmptyFields = (req, res, next) => {
  const { email, lastName, ...rest } = req.body;
  for (let field in rest) {
    if (rest[field] === "") {
      return res
        .status(409)
        .json({
          status: req.t("fail"),
          message: req.t("fill-the-field") + " " + field,
        });
    }
  }
  return next;
};
