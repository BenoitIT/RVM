// Generate a random password
export const generatePassword = () => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return password;
};
export const generateRondomPhoneNumber = () => {
  const nums = [1, 3, 4, 5, 6, 7, 8, 9];
  let Pnumber = "01";
  for (let i = 0; i < 8; i++) {
    Pnumber += nums[Math.floor(Math.random() * nums.length)];
  }
  return Pnumber;
};
