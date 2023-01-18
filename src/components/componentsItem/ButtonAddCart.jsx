import './AddCart.css'
import cartWhite from "../Img/cartwhite.svg"; 




const ButtonAddCart = () => {
  return (
    <button id='AddCart'>
      <img src={cartWhite} alt='add'></img>
    </button>
  )
}

export default ButtonAddCart;