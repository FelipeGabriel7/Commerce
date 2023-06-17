import { BsPlusCircleFill } from "react-icons/bs";
import { Products } from "../Products/Products"
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext/cartContext";
import { AddCart } from "../../contexts/cartContext/actions";
import { Message } from "../templates/Utils/Message";

export const Item = ({ itemObject }) => {

    const { name, price, imageUrl} = itemObject;
    const { dispatch} = useContext(CartContext);
    const [ message , setMessage ] = useState(false);

    

    const handleAdd = (item) => {

        setMessage(prevMessage => !prevMessage)

        AddCart(dispatch , item)

        setTimeout(() => {
                  setMessage(prevMessage => !prevMessage)
        }, 2000)

    }

    return (
        <>
      
            <div className="container-item-product-content">

            {message && (
                    <Message type="success" title="produto adicionado ao carrinho" />
                )}

                <img src={imageUrl} alt={name} className="container-item-product-content-image" />
                <div className="content-information">
                    <h3 className="content-information-name"> {name} </h3>
                    <span className="container-information-price" style={{color: '#000'}}> $ {price} </span>
                    <span className='card-events-add-cart' onClick={() => handleAdd(itemObject)}> <span className='card-events-add-cart-title'> Adicionar ao carrinho </span> <BsPlusCircleFill className='card-events-add-cart-icon'/> </span>
                </div>
            </div>
        </>
    )
}