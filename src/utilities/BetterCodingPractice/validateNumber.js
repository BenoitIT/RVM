export const validateIntegerLength = (num, length) => {
  const numString = num.toString();
  return numString.length == length;
};
export const checkDeplucation = async (
  model,
  phoneNumber,
  anatherAttr,
  req,
  res
) => {
  const existingUser = await model.findOne({
    where: {
      phoneNumber,
    },
  });
  const isEmailUsed = await model.findOne({
    where: {
      email: anatherAttr,
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
export const checkExistance = async (model, Attribute, req, res) => {
  const attributeThere = await model.findOne({
    where: {
      zone:Attribute,
    },
  });
  if (attributeThere) {
    return res.status(409).json({
      status: req.t("fail"),
      message:req.t("zonexis"),
    });
  } else {
    return;
  }
};
export const checkIDDeplucation = async (
  model,
  phoneNumber,
  anatherAttr,
  req,
  res
) => {
  const existingUser = await model.findOne({
    where: {
      phoneNumber,
    },
  });
  const isNationalIDUsed = await model.findOne({
    where: {
      nationalID: anatherAttr,
    },
  });
  if (isNationalIDUsed) {
    return res.status(409).json({
      status: req.t("fail"),
      message: req.t("nationaiIDexist"),
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
export const checkmachineDeplucation = async (
  model,
  gps_longitude,
  gps_latitude,
  req,
  res
) => {
  const existingMachine = await model.findOne({
    where: {
      gps_longitude,
      gps_latitude
    },
  });
  if (existingMachine) {
    return res.status(409).json({
      status: req.t("fail"),
      message: req.t("longitudeUsed"),
    });
  } else {
    return;
  }
};