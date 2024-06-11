function generateRandomAlphanumeric(length = 10) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;
    const referralCode = generateRandomAlphanumeric();
    // let's do a 20% discount everytime
    event.params.data.referral_code = referralCode;
  },

  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
  },
};
