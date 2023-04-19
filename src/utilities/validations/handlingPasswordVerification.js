import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};
export const signToken = async (user) => {
  let expires = process.env.JWT_EXPIRES_IN;
  const result = await jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: expires,
  });
  return result;
};
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};


