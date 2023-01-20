import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import img from "../../components/Img/jujutsu01.jpg";
import ButtonAddCart from "../../components/Button/ButtonAddCart";
 const ItemListContainer = () => {
   return (
    <>
    <h1 className="title">MANGAS</h1>
    <div className="productos">
     <div className="producto">
       <a href="#">
          <div className="producto__img">
            <img src={img} alt="" />
          </div>
         </a>
        <div className="producto__footer">
          <h2>Title</h2>
          <p>Categoria</p>
          <p className="price">$1900</p>
        </div>
        <div className="buttom">
          <ButtonAddCart />
            <a href="#" className="btn">Vista</a>
        </div>
        
     </div> 
     <div className="producto">
   <a href="#">
      <div className="producto__img">
        <img src={img} alt="" />
      </div>
     </a>
    <div className="producto__footer">
      <h2>Title</h2>
      <p>Categoria</p>
      <p className="price">$1900</p>
    </div>
    <div className="buttom">
      <ButtonAddCart />
        <a href="#" className="btn">Vista</a>
    </div>
    
 </div> 
 <div className="producto">
   <a href="#">
      <div className="producto__img">
        <img src={img} alt="" />
      </div>
     </a>
    <div className="producto__footer">
      <h2>Title</h2>
      <p>Categoria</p>
      <p className="price">$1900</p>
    </div>
    <div className="buttom">
      <ButtonAddCart />
        <a href="#" className="btn">Vista</a>
    </div>
    
 </div> 
 <div className="producto">
   <a href="#">
      <div className="producto__img">
        <img src={img} alt="" />
      </div>
     </a>
    <div className="producto__footer">
      <h2>Title</h2>
      <p>Categoria</p>
      <p className="price">$1900</p>
    </div>
    <div className="buttom">
      <ButtonAddCart />
        <a href="#" className="btn">Vista</a>
    </div>
    
 </div> 
    </div>
  </>
   )
 }
 
 export default ItemListContainer