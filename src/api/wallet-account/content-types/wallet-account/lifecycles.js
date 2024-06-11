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
  beforeCreate(data) {
    data.referral_code = generateRandomAlphanumeric();
  },

  afterCreate(event) {
    const { result, params } = event;

    // do something to the result;
  },
  async beforeUpdate(params, data) {
    if (!data.referralCode) {
      data.referralCode = generateRandomAlphanumeric();
    }
  },
};
