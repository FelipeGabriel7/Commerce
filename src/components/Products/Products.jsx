import { useContext } from 'react'
import './Products.sass'
import { BsPlusCircleFill } from 'react-icons/bs'
import { CartContext } from '../../contexts/cartContext/cartContext'
import { AddCart } from '../../contexts/cartContext/actions'


export const Products = ({ name , price , imageUrl , id  , message}) => {

    const { dispatch } = useContext(CartContext);


    const handleAddCart = (id) => {
      message(' Produto adicionado ao carrinho! ')
      AddCart(dispatch , id)

      setTimeout(() => {
        message('')
      } , 2000)
    }

    return(
        <div className='card'>
            <img src={imageUrl}  alt={name} className='card-image-product'/>
            <h3 className='card-title-product'> {name} </h3>
            <div className='card-events'>
                <span className='card-events-price-product'> $ {price} </span>
                <span className='card-events-add-cart'> <span className='card-events-add-cart-title' onClick={() => handleAddCart(id)}> Adicionar ao carrinho </span> <BsPlusCircleFill className='card-events-add-cart-icon'/> </span>
            </div>
        </div>

    )
}