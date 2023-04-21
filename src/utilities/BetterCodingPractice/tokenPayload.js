export let payLoad=(user)=>{
    const payload = {
        firstName: user.firstName,
        Nationality: user.Nationality,
        phoneNumber: user.phoneNumber,
        role: user.role,
      };
  return payload;
}