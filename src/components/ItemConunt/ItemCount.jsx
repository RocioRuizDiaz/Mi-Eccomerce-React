import './itemcount.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

function ItemCount({stock}) {

   const [ count, setCount ] = useState(0)

const decrement = () => {
    if (count > 1){
      setCount(count - 1);
    }
}
const incremente = () => {
  if ( count > 1) {
    setCount (actual => + 1);
  }
    
}

  return (
    <>
      
        { 
          <>
              <Counter stock={stock} />
               <button onClick={() => setCount(true)} id="aumentar">
                    Agregar al carrito
                </button>
           </>
          }
          
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
        
        
      
    </>
  );
}

export default ItemCount;

































































