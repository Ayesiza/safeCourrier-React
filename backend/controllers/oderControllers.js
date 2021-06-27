import Order from '../modals/orders';
import User from '../modals/users';

const OrderControllers ={
    createDeliveryOrdery:(req, res) => {
        const  { userName,  parcelName,receipient, destination, status, phone} = req.body
        const newOrder = new Order({userName, parcelName,receipient, destination, status, phone})
       newOrder.save()
       .then((order) =>{
           if(order) {
               return res.status(201).json(newOrder)
            }
       })
       .catch((error) =>{
           console.log(error)
       });   
    },

    getAllOrders: (res, req) => {
     
    },

createOrders:async(req, res) => {
    const {userId}= req.params
    const newOrder = new Order(req.body);
    const user = await User.findById(userId);
    newOrder.userName =user;
    await newOrder.save();
    user.orders.push(newOrder);
    await user.save();
    res.status(201).json(newOrder)
    

}

}

export default OrderControllers;