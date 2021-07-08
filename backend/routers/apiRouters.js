import express from 'express';
const router = express.Router();
 import UserController from '../controllers/userControllers';
 import OrderControllers from '../controllers/oderControllers';
 import authMiddleware from '../middleware/auth'


 //authRoutes
 router.post('/user/signup',authMiddleware.userAreadyExist, UserController.signup);
 router.post('/user/login', UserController.login);
 router.get('/user', UserController.getUsers);
 //order Routes
 router.post('/order',authMiddleware.getToken,authMiddleware.verifyToken, OrderControllers.createDeliveryOrder);
 //router.get('/orders',authMiddleware.getToken,authMiddleware.verifyToken, OrderControllers.getAllOrders);
 router.put('/order/:id',authMiddleware.getToken,authMiddleware.verifyToken, authMiddleware.userAdmin, OrderControllers.ChangeDestination);
 router.patch('/orders/:id',authMiddleware.getToken,authMiddleware.verifyToken, OrderControllers.changeLocation);
 router.delete('/order/:id', authMiddleware.getToken,authMiddleware.verifyToken, OrderControllers.cancelDelivery)
 

export default router;
//MONGODB_URL=mongodb+srv://ayesiza:muslim22@freecluster.nrzxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority 
