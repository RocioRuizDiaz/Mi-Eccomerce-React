import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
  const [counter, setCounter] = useState(1);
  const [ itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(false)

  const incrementStock =() => {
    if (counter < itemStock) {
      setCounter(counter + 1);
    }
  }

  const decrementStock = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  };

  const addToCart = (quantity) => {
   setCounter (itemStock - counter);
   setCounter(1);
   setVendido(true);
   onAdd(quantity);
   
  };

  useEffect(() => {
    setItemStock(stock);
  }, [stock])
 

  return (
      <div className="container">
              <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="basec putlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={decrementStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={incrementStock}>+</button>   
                   </div>
                </div>
             </div>
             <div className="row">  
              <div className="col-md-2">
                 {vendido ? <Link to={"/cart"} className="btn btn-outline-primary">Finalizar compra</Link>:<button type="button" className="btn btn-outline-primary" onClick={()=> {addToCart(counter)}}>Agregar al carrito</button>}
              </div>
        </div>
     </div>
  );
}

export default ItemCount;

































































