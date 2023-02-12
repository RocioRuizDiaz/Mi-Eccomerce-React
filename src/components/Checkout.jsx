import React, {useState, useContext} from 'react';
import { cartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, sumaTotal} = useContext(cartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone ] = useState("");
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: name, email: email, phone: phone },
            items: cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, price_total: item.quantity * item.precio })),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumaTotal(),
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }
    return (
       <div className="container">
            <div className="row my-5">
                <div className="col">
                 <form>
                      <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => { setName(e.target.value) }}></input>
                        
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Ingrese su correo electronico" onInput={(e) => { setEmail(e.target.value) }}></input>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Telefono</label>
                        <input type="tel" pattern="[0-9]{10}" className="form-control" id="phone" placeholder="Ingrese su numero telefonico" onInput={(e) => { setPhone(e.target.value) }}></input>
                      </div>
                      <button type="button" onClick={generarOrden} className="btn btn-primary">Submit</button>
                </form>
                 <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img alt={item.title}src={`/images/${item.imageId}`}  width={64} /></td>
                                    <td className="align-middle">{item.title}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.price}</td>
                                </tr>
                              ))}
                                <tr>
                                    <td colSpan={3} className="text-end">Total a pagar</td>
                                    <td  className="text-center">ARS $ {sumaTotal()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col">
                    {orderId ? <Navigate to={"/Agradecimiento/" + orderId} /> : ""}
                    </div>
                 </div>
            </div>
       </div>
     )
}

export default Checkout