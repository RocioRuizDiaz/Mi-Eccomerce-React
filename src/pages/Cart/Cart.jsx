import React,  { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";


const Cart = () => {
  const { cart, removeItem, clear,  sumaTotal, cartTotal} = useContext(cartContext);
  
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
                <th scope="col" className="text-center">Precio</th>
                <th scope="col" className="text-center">Categoria</th>
                <th scope="col" className="text-center">Cantidad</th>
                <th scope="col" className="text-center">Total</th>

              </tr>
            </thead>  
            <tbody className="table-group-divider text-center">
                {cart.map(product => (
                   <tr key={product.id}>
                   <td><img alt={product.title}src={`/images/${product.imageId}`}  width={64} /></td>
                   <td className="text-center align-middle">${product.price}</td>
                   <td className="text-center align-middle">{product.categoryId}</td>
                   <td className="text-center align-middle">{product.quantity}</td>
                   <td className="text-center align-middle">{product.quantity * product.price}</td>

                   <td className="text-end align-middle"><Link onClick={() => { removeItem(product.id)}} title="Eliminar Producto"><img src={"images/trash.svg"} alt={"Eliminar Producto"} width={24} /></Link></td>
                 </tr>
                  ))}
                  <tr>
                  <td>&nbsp;</td>
                    <td className="text-end" colSpan={3}>Suma Total</td>
                    <td className="text-end">ARS $ {sumaTotal()}</td>
                    <td>&nbsp;</td>
              
                  </tr>
                  <tr>
                    <th scope="col" colSpan={1}><Link onClick={clear} className="btn btn-outline-danger"title="Vaciar Carrit">Vaciar Carrito</Link></th>
                    <th scope="col" colSpan={6}><Link to={"/Checkout"} className="btn btn-outline-success" title="Finalizar Comrpra">Finalizar Comrpra</Link></th>
                  </tr>

            </tbody>
            </table>
       </div>   
    </div>
  </div>
    
    
  );
};

export default Cart;