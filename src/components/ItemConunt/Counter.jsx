import { useState } from "react";

export const Counter = ({stock}) => {
  
const [ count, setCount ] = useState(0)

const decrement = () => {
    if (count > 1){
      setCount(count - 1);
    }
}
const incremente = () => {
  if ( count > 1) {
    setCount (count => + 1);
  }
    
}

  return (
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
    
  )
}
export default Counter