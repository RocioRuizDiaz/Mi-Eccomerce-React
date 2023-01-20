import './ItemList.css';
import ButtonAddCart from '../Button/ButtonAddCart';
//import Item from '../Item/Item';


function ItemList({products}) {
  return (
    <div className='product'>
      <img className='product__img' src='https://images.cdn3.buscalibre.com/fit-in/180x180/23/86/2386b2dec0a7004405ff68cf9cd9e4a0.jpg' alt='jujutsu' />
      <h2 className='product_title'>Jujutsu </h2>
      <div className='product__details'>
        <p className='product__oldPrice'>$2500</p>
        <p className='product__price'>$2000</p>
        <ButtonAddCart />
      </div>

    </div> 
  );
}

export default ItemList;




