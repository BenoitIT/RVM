export let payLoad=(user)=>{
    const payload = {
        id: user.id,
        firstName: user.firstName,
        Nationality: user.Nationality,
        phoneNumber: user.phoneNumber,
        role: user.role,
      };
  return payload;
}