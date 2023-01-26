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
           <div>
              <div className="item-cont">
             <div>
               <button className="cont" onClick={decrement}>
                 -
               </button>
               <strong className="count">{count}</strong>
               <button onClick={incremente}>
                 +
               </button>         
               </div>

            </div>
             <div className='w-full'>
            <Link to="/cart">
              <button>
                Finalizar Compra
              </button>
            </Link>
            <Link to="/">
              <button className='uppercase border-widh w-full mt-4 '>
              Continuar Comprando
              </button>
            </Link>
            </div>
      
    </div>
  );
}

export default ItemCount;

































































