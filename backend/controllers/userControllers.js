import User from '../modals/users';
import authHelper from '../middleware/utils';
import Helpers from '../middleware/helpers'
import bcrypt from 'bcrypt';


require ('dotenv').config();


 const UserController = {

    signup: (req, res) => {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, password) => {
            User.create({ ...req.body, password }, (err, user) => {
              if (err) {
                return res.status(400).send({ message: 'Create user failed', err });
              }
              return res.status(200).send({
                status: 200,
                message: 'registration successful',
                data: user,
              });
            });
          });
        });
      },
      login: (req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }, (err, user) => {
         if (!user) return res.send({error: 401, message:'user does not exist'});
          if (authHelper.comparePassword(password, user.password)) {
            user.password = undefined;
            const token = Helpers.signToken({
              _id: user._id,
              email: user.email,
            });
            return res.status(200).send({
                status: 200,
                message: 'login successful',
                user, token
               
              });
            
          }
          return res.send( {error:401, message:'Invalid login details'});
        });
      },
      getUsers: (req, res) => {
        User.find({}).then((users) =>{
            if(users) {
                return res.status(200).json({users})
            }else
            return res.status(400).json({message:'No user found'})
        });
     
    },
    };



export default UserController;