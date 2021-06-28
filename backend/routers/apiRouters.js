import express from 'express';
const router = express.Router();
 import UserController from '../controllers/userControllers';
 import OrderControllers from '../controllers/oderControllers';


 //authRoutes
 router.post('/user/signup', UserController.signup);
 router.post('/user/login', UserController.login);

 router.post('/order', OrderControllers.createDeliveryOrdery)
 router.post('/orders/:userId', OrderControllers.createOrders)
 router.get('/orders', OrderControllers.getAllOrders);
 router.put('/order/:id', OrderControllers.ChangeDestination)



export default router
