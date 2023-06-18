export const generateRondomRestcode = () => {
    const nums = [1,2,3, 4, 5, 6, 7, 8, 9,0];
    let Restcode = "RVM-";
    for (let i = 0; i < 4; i++) {
        Restcode += nums[Math.floor(Math.random() * nums.length)];
    }
    return Restcode;
  };