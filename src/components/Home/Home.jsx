import { useContext, useEffect, useState } from "react";
import { CommerceContext } from "../../contexts/commerceContext/context";
import { Products } from "../Products/Products";
import './Home.sass'
import { actionsLoading, actionsSuccess } from "../../contexts/commerceContext/actions";
import { Message } from "../templates/Utils/Message";

function Home() {

    const { state  , dispatch } = useContext(CommerceContext);
    const [message , setMessage] = useState('');


    useEffect(() => {
        actionsLoading(dispatch)
        actionsSuccess(dispatch)
    }, [dispatch])


    return (
        <>
            {message && (
                <Message title="Produto adicionado ao carrinho" type="success" />
            )}

            {state.loading && <h2 
            style={{textAlign: 'center' , 
                    fontSize: '2em' , 
                    height: '80vh' , 
                    marginTop: '5em',
                    color: '#09e',
                    fontFamily: 'cursive'}}> Carregando Produtos... </h2>}

            {!state.loading && (
                    <div className="container-home">


                    {state.products && state.products.map(( product ) => (
        
                        
                        <Products
                            key={product.id}
                            id={product}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            message={setMessage}
                        />
                    ))}
                </div>

            )}

        
        
        </>
    
    );
}

export default Home;