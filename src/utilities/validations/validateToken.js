import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const checkToken = async (token) => {
  try {
    const result = await jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return result;
  } catch (error) {
    return false;
  }
};
