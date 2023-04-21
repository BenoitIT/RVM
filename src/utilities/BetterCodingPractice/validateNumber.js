export const validateIntegerLength = (num, length) => {
  const numString = num.toString();
  return numString.length == length;
};
export const checkDeplucation = async (
  model,
  phoneNumber,
  email,
  req,
  res,
) => {
  const existingUser = await model.findOne({
    where: {
      phoneNumber,
    },
  });
  const isEmailUsed = await model.findOne({
    where: {
      email,
    },
  });
  if (isEmailUsed) {
    return res.status(409).json({
      status: req.t("fail"),
      message: req.t("emailUsed"),
    });
  } else if (existingUser) {
    return res.status(409).json({
      status: req.t("fail"),
      message: req.t("user_exixted_error"),
    });
  } else {
    return;
  }
};
