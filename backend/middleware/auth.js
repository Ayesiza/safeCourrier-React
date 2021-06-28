import authHelper from './utils';



const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = authHelper.getToken(req);
    const { error, user } = authHelper.verifyToken(token);
    error && res.send(res, 401, error.message.replace('session', 'token'));
    req.user = user;
    return next();
  },

  
};

export default authMiddleware;
