export const generateRandomResetcode = () => {
    const nums = [1,2,3, 4, 5, 6, 7, 8, 9,0];
    let Resetcode = "RVM-";
    for (let i = 0; i < 4; i++) {
        Resetcode += nums[Math.floor(Math.random() * nums.length)];
    }
    return Resetcode;
  };