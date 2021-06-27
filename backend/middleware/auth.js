import authHelper from './utils';
import User from '../modals/users'


const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = authHelper.getToken(req);
    const { error, user } = authHelper.verifyToken(token);
    error && res.send(res, 401, error.message.replace('session', 'token'));
    req.user = user;
    return next();
  },

  findUser: async (req, res, next) => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) return res.send({ message: 'user does not exist', err });
      return next();
    });
  },

  
};

export default authMiddleware;
