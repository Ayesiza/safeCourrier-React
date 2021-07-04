import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const authHelper = {
 
  hashPassword(password) {
    return bcrypt.hashSync(password, 10, (err, hash) => hash);
  },

  hashData(password) {
    return bcrypt.hashSync(password, 10, (err, hash) => hash);
  },

 
  comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash, (err, res) => res);
  },

  decrypt(password, hash) {
    return bcrypt.compareSync(password, hash, (err, res) => res);
  },
};

export default authHelper;
