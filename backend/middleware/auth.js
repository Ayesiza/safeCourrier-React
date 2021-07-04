import User from '../modals/users';
import jwt from "jsonwebtoken";

//import authHelper from './utils';



const authMiddleware = {
    getToken (req, res, next){
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader === 'undefined') return res.status(403).send({ status_code: 403, error: 'provide a token' });
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    
       },
       verifyToken(req, res, next){
        jwt.verify(req.token, process.env.APP_KEY, (err, decode) => {
            if (err) return res.status(403).json({ error: 403, message: err.message });
            req.user = decode
            next();
          });
       },
      
      
     findUser: async (req, res, next) => {
    const { email } = req.body;
    User.findOne({ email }, (err, user) => {
      if (!user) return res.send({error: 401, message:'User does not exist'});
      return next();
    });
  },
  userAreadyExist: async (req, res, next) => {
      User.findOne({email:req.body.email}, (err,user) =>{
        if(user) return res.send({message:'User already axist'});
         next();
      })
  },

 userAdmin:async (req, res, next)=> {
  console.log(req.user)
    if(req.user && req.user.isAdmin){
      return next();
    }
    return res.send({message:'For only admin'});

   },
  

};


export default authMiddleware;
