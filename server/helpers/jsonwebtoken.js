const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "LetsGrow";

const tokenGenerator = (data) => {
  const { id, username, name, email, role } = data;
  return jwt.sign(
    {
      id,
      username,
      name,
      email,
      role,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
