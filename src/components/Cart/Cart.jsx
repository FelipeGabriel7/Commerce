import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cartContext/cartContext";
import { BsFillTrashFill } from 'react-icons/bs'
import './Cart.sass';
import { LoadingCart, RemoveCart, RemoveItem, ResetCart, SuccessCart, UpdateItem } from "../../contexts/cartContext/actions";
import { Link } from "react-router-dom";
import { AiFillPlusCircle , AiFillMinusCircle} from 'react-icons/ai'

export function Cart() {

    const { state: stateCart , dispatch } = useContext(CartContext);
    const [total , setTotal] = useState(0);
    const { cart , loading } = stateCart;
    const [modal , setModal] = useState(false);

    console.log(cart)

    useEffect(() => {
        LoadingCart(dispatch)
        SuccessCart(dispatch)
       
    } , [dispatch])


    const handleValueCart = () => {
        const valueMax = cart.reduce((acc , it) => {
            acc += (it.price * it.quant)
            return acc;
        }, 0)

        setTotal(valueMax);
    }

    useEffect(() => {
        handleValueCart()
    } , [cart])


    const handleRemoveItem = (id) => {
        RemoveCart(dispatch , id)
    }

    const handleResetCart = () => {
        ResetCart(dispatch)
    }

 
    const handleFinal = () => {
        setModal(prevModal => !prevModal)
    }

    return (
        <div className="cart">

            {loading && <span className="message-loading"> Carregando produtos </span>}


            {stateCart.cart.length <= 0 && (
                <h1 className="message-isSize"> Não existem produtos adicionados ao carrinho <Link to="/" className="link-cart"> Voltar a página inicial </Link></h1>
            )}


        
            <div className="cart-container">

                <div className="cart-container-content">
                    <h1 className="cart-container-content-title"> Seus produtos ( {cart.length} ) </h1>
                    <h2 className="cart-container-content-total"> Total: $ {total} </h2>
                </div>
               
            {cart && cart.map(item => (
                <div key={item.id} className="cart-product">
                    <img src={item.imageUrl} alt={item.name} className="cart-product-image" />
                    <span className="cart-product-information"> {item.name} ({item.quant}) -  ${item.price} </span>

                    <div className="events-cart">
                       <AiFillPlusCircle onClick={() => UpdateItem(dispatch , item)}/>
                       <AiFillMinusCircle onClick={() => RemoveItem(dispatch , item)}/>
                    
                    </div>


                    <div className="cart-product-icon">
                        <BsFillTrashFill className="cart-product-icon-trash" onClick={() => handleRemoveItem(item)}/>
                    </div>
                   
                </div>
            ))}

                {cart.length > 0 && (
                    
                    <div className="cart-container-buttons">
                        <button onClick={handleResetCart}> Finalizar Compra </button>
                    </div>

                )}

               

            </div>
            

    
        </div>
    );
}
