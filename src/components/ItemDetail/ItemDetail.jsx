import "./ItemDetail.css"
//import { Link } from "react-router-dom";
import ItemCount from "../ItemConunt/ItemCount";



function ItemDetail({product}) {

  const { name, category, price, deta, description, stock } = product;

  return (
    <div className="product__seccion">
      <div className="item__detail">
        <img src={deta} alt={name}/>
          <span className="text-gray-700">{category}</span>
            <span>{name}</span>
            <div className="pt-8">
              <h1 className="font-bold">{name}</h1>
            </div>
            <p className="flex items-center pt-4">
              <h3 className="text-2xl">{price}</h3>
            </p>
           <p className=" flex items-center pt-8">{description}</p>
        <ItemCount stock={stock} />
        <div className='flex flex-col mt-6'>
            <div className='count'>
                <p className='text-3xl'>01</p>
                <p className='text-xl'>/ 05</p>
            </div>   
            
        </div>
      </div>
       
                        

   </div>
  );
}

export default ItemDetail;


         









