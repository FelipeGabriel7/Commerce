import { useContext, useState } from 'react';
import './Navbar.sass'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext/cartContext';

export function Navbar() {

    const [input , setInput] = useState('');
    const navigate = useNavigate();
    const { state: stateCart } = useContext(CartContext);
 

    const handleSearch = () => {
        
        navigate(`/product/${input}`)
        setInput('')
    }
    
    

    return (
        <section className='container'>
            
            <div className='Navbar'>
                <Link className='Navbar-title' to="/"> Store </Link>

                <div className='Navbar-input-search'>
                    <input type="search" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <AiOutlineSearch onClick={handleSearch} style={{ color: '#1cc40d' , fontSize: '2em' , fontWeight: 'bold' , cursor: 'pointer'}}/>
                </div>

                <Link to="/cart"> 
                    <AiOutlineShoppingCart className='Navbar-icon'
                 style={{ color: '#1cc40d' , fontSize: '1.8em'}}/>
                   <span className='Navbar-cart-size'> {stateCart.cart.length} </span> 
                </Link>
            </div>



        </section>
    );
}

