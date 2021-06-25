import React, { useEffect, useState }  from 'react'
//import data from '../data'
import axios from 'axios';

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const {data} =await axios.get("/api/orders");
            setOrders(data);
        }
        fetchData();
        return () => {
            //
        };
       
    }, [])
    return (
        <div className="parcel-list">

         <ul className="parcel">
             {
                 orders.map(order =>
                    <li key={order._id}>
                        <h4>{order.item}</h4>
                        <h6>{order.receipient}</h6>
                        <h6>{order.address}</h6>
                        <h6>{order.status}</h6>
                    </li>
                    )
             }
            
        </ul>   
        </div> 

           
        
    )
}

export default Orders

// import React, { useState } from 'react'

// function Parcel({parcel, index}) {
//     return(
//         <div className="parcel">{parcel.item}  </div>

//     )
   
// }

// function ParcelForm({addParcel}) {
//     const [value,setValue] = useState('');

// const handleSubmit = e =>{
//     e.preventDafault();
//     if(!value) return;
//     addParcel();
//     setValue('');

// }
//     const handleChange = e=> {
//         setValue({...value,value: e.target.value})
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input
//              type="text"
//              className="input"
//              value={value}
//              onChange={handleChange}

//             />

//         </form>
//     )
// }

// function EditOrder() {
// const  [ parcels, setParcels] = useState([
//     {
//         item:'Laptop',
//         receipient:'Ayesiza Hawah',
//         address:'kampala-avenue',
//         status:"Delivered"
//     },
//     {
//         item:'Clothes',
//         receipient:'Aslam Mugisa',
//         address:'Hoima Town',
//         status:'Intransit'
        
//     },
//     {
//         item:'Laptop',
//         receipient:'Ayesiza Hawah',
//         address:'kampala-avenue',
//         status:"Delivered"
//     },
// ])

//     return (
//         <div>
//             <div className="parcel-list">
//                 {parcels.map((parcel, index) =>(
//                    <Parcel key={index} index={index} parcel={parcel} />
//                 ))}
//             <ParcelForm  addParcel={addParcel}/>

//               </div>

//             </div>
            
          
//     )
// }

// export default EditOrder
