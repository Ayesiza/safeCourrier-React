import Order from '../modals/orders';

const OrderControllers ={
    createDeliveryOrder:(req, res) => {
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

    getAllOrders: (req, res) => {
        Order.find({}).then((orders) =>{
            if(orders) {
                return res.status(200).json({orders})
            }else
            return res.status(400).json({message:'No orders found'})
        });
     
    },
    
    ChangeDestination:(req, res) =>{
        Order.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((order)=> {
            if(order){
                return res.status(200).json({message:'Destination changed', order})
            }else{
                return res.status(404).json({message:'Order of the given id not found'})
            }
        })
    },
    changeLocation: (req,res) => {
        Order.findByIdAndUpdate(req.params.id, req.body).then((order)=> {
            if(order){
                return res.status(200).json({message:'location changed', order})
            }else{
                return res.status(404).json({message:'Order of the given id not found'})
            }
        })
    
        
    },
    
cancelDelivery: (req, res) => {
    Order.findByIdAndDelete(req.params.id).then((order) => {
        if(order){
            return res.status(200).json({message:'Order Cancelled'});
        }else{
            return res.status(404).json({error:'Order of the given id not found'})
        }
    })

},


}

export default OrderControllers;

