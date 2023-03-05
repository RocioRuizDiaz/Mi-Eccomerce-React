import React,  { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";


const Cart = () => {
  const { cart, removeItem, clear,  sumaTotal, cartTotal,quantity, id} = useContext(cartContext);

  if (cartTotal() ===0) {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="alert alert-info" role="alert">
              No hay productos en tu carrito.
            </div>
            
            <Link className="btn btn.outline-primary" to={"/"}>Volver a la pagina principal</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    
    <div className="container py-5 text-center">
     <div className="row">
      <div className="table-responsive">
          <table className="table">
            <thead className="table-light">
              <tr className=" space-between">
                <th scope="col" className="text-center">Producto</th>
                
                
                <th scope="col" className="text-center">Nombre</th>
                <th scope="col" className="text-center">precio Unitario</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Total</th>

              </tr>
            </thead>  
            <tbody className="table-group-divider text-center">
                {cart.map(item => (
                   <tr key={item.id}>
                   <td><img alt={item.title}src={`/images/${item.imageId}`}  width={64} /></td>
                   <td className="text-center align-middle">{item.title}</td>
                   <td className="text-center align-middle">${item.price}</td>
                   <td className="text-center align-middle">{item.quantity}</td>
                   <td className="text-center align-middle">{item.quantity *item.price}</td>
                   
                   <td className="text-end align-middle"><Link onClick={() => { removeItem(item.id)}} title="Eliminar Producto"><img src={"images/trash.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                    
                 </tr>
                  ))}
                  <tr>
                    <td className="text-end" >Suma Total</td>
                    <td className="text-end">ARS $ {sumaTotal()}</td>
            
                  </tr>
                  <tr>
                    <th scope="col" ><Link onClick={clear} className="btn btn-outline-danger"title="Vaciar Carrit">Vaciar Carrito</Link></th>
                    <th scope="col" ><Link to={"/Checkout"} className="btn btn-outline-success" title="Finalizar Comrpra">Finalizar Comrpra</Link></th>
                  </tr>

            </tbody>
            </table>
       </div>   
    </div>
  </div>
    
    
  );
};

export default Cart;