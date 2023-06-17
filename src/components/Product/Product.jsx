import  { useContext, useEffect, useRef, useState } from "react";
import {  useParams } from "react-router-dom";
import { CommerceContext } from "../../contexts/commerceContext/context";
import { Item } from "./ItemProduct";
import { Message as Msg  } from "./Message";
import './Product.sass'



export const Product = () => {

    const params = useParams()
    const { state: stateCommerce } = useContext(CommerceContext);
    const [ item , setItem ] = useState(null);
    const nameItem = useRef(params.item)



    useEffect(() => {

        const loadItem = () => {
            stateCommerce.products.map((pr) => {
    
                if(nameItem.current === '') return;
    
                if(pr.name.includes(nameItem.current)){
                    setItem(pr)
                }
    
            })
    
            nameItem.current = ''
    
        }
    

        loadItem()
    }, [nameItem , item , stateCommerce])

   
    return(


        <div className="container-item-product">


            {item && (
                <Item itemObject={item}/>
            )}

            {!item && (
                <Msg message="Me desculpe mas não possuimos esse produto atualmente"/>
            )}
        </ div>
    )
}