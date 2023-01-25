import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



export const Counter = (stock) => {
const [ count, setCount ] = useState(1)

const decrement = () => {
    setCount(actual => actual - 1)
}
const incremente = () => {
    setCount (actual => + 1)
}

  return (
    <div>
        {count <= 1 ?
         <button>
            <FontAwesomeIcon icon={faMinusCircle}/>
         </button>
            :
          <button onClick={decrement}>
            <FontAwesomeIcon icon={faMinusCircle}/>
          </button>         
    }
    <input value={count} type="number" onChange={e => setCount(e.target.value)}></input>
    { count >= stock.stock ?
        <button>
            <FontAwesomeIcon icon={faMinusCircle}/>
        </button>
            :
        <button onClick={incremente}>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </button>  
 
    }
    </div>
  )
}
export default Counter