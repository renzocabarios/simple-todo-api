import bcrypt from "bcrypt";
import ENV from "../../../env/index.js";
import jwt from "jsonwebtoken";
import users from "../users/users.service.js";

const authenticate = async (_req, _res) => {
  const { password, email } = _req.body;
  const user = await users.getByEmail(email);

  if (!user) {
    _res.send({ data: [], status: "fail", message: "User does not exist" });
    return;
  }

  if (!(await bcrypt.compare(password, user.password))) {
    _res.send({ data: [], status: "fail", message: "Password is invalid" });
    return;
  }

  const token = await jwt.sign(
    {
      _id: user._id,
    },
    ENV.JWT_KEY,
    { expiresIn: "1y" }
  );

  _res.send({
    data: [user],
    status: "success",
    message: "Get user success",
    meta: { token },
  });
};

export { authenticate };
