/**
 * Creates an object with user info
 * @param {Object} req - request object
 */
const setUserInfo = (req = {}) => {
  return new Promise((resolve) => {
    let user = {
      _id: req._id,
      name: req.name,
      email: req.email,
      phone: req.phone,
      role: req.role,
    };
    resolve(user);
  });
};

module.exports = { setUserInfo };
