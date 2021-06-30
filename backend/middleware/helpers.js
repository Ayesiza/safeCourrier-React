import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const Helpers = {
  signToken: (user) => {
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.APP_KEY,
      {
        expiresIn: "24 hours",
      }
    );
    return token;
  },
};

export default Helpers;
