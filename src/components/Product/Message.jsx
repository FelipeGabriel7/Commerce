import { Link } from "react-router-dom"


export const Message = ({ message }) => {
    return (
        <>
        <div className="container-item-product-message">
            <h2 className="container-item-product-message-text"> {message} </h2>
            <Link to="/" className="container-item-product-message-link"> Retornar a página inicial </Link>
        </div>
        </>
    )
}