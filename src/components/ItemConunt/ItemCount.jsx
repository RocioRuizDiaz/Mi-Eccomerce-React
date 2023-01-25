import './itemcount.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

function ItemCount({stock}) {

    const [goToCart, setGoToCart ] = useState(false)

  return (
    <>
      <div className="itemCount">
        { !goToCart ?
          <>
              <Counter stock={stock} />
               <button onClick={() => setGoToCart(true)} id="aumentar">
                    Agregar al carrito
                </button>
           </>
         
          :
          <div className='w-full'>
            <Link to="/cart">
              <button>
                Finalizar Compra
              </button>
            </Link>
            <Link to="/">
              <button className='uppercase border-widh w-full mt-4 rounded-sm border border-gray-800 py-4 '>
              Continuar Comprando
              </button>
            </Link>
            </div>
        }
        
      </div>
    </>
  );
}

export default ItemCount;

































































