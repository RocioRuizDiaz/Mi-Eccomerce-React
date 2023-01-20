import './itemcount.css';


function ItemCount(props) {
  return (
    <div className="itemCount">
      <span>Quiero:</span>
      <div>
        <button id="quitar">-</button>
        <span className="cantTxt"> {props.cant} unidades</span>
        <button id="aumentar">+</button>
      </div>
    </div>
  );
}

export default ItemCount;

































































