import "./ItemDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft, faStar, faStarHafalt, faChevronLeft, faChevronRight  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ItemCount from "../ItemConunt/ItemCount";



function ItemDetail({product}) {

  const {name, category, price, deta, description, stock } = product;

  return (
    <main className="pt-10 pb-12 pl-18">
      
      <Link to="/">
        <button className="pl-56">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      <div className="flex">
        <div className="flex flex-col w-/2 item-center">
          <div className="max-w-md">
            <div className="flex items-center text-sm pt-8">
              <span className="text-gray-700">{category}</span>
              <span>{name}</span>
            </div>
            <div className="pt-8">
              <h1 className="text-4xl font-bold">{name}</h1>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="text-2xl">{price}</span>
            </div>
          </div>
        </div>
        <p className="leading-relaxed pt-8">{description}</p>
        <ItemCount stock={stock} />
        <div className='flex flex-col w-1/2  mt-6'>
            <div className='flex pr-20 space-x-2'>
                <span className='text-3xl font-semibold leading-tight'>01</span>
                <span className='text-xl'>/ 05</span>
            </div>
            <div className='flex pr-10 space-x-16'>
                <button className='p-3'><FontAwesomeIcon icon={faChevronLeft}/></button>
                <button className='p-3'><FontAwesomeIcon icon={faChevronRight}/></button>   
            </div>                  
            <img className="product__image" src={deta} alt="image" /> 
        </div>
        </div>
       
                        

   </main>
  );
}

export default ItemDetail;


         









