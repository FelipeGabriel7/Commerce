import { BrowserRouter as Container , Routes , Route} from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar"
import Home from "../../Home/Home";
import { Cart } from "../../Cart/Cart";
import { Footer } from "../../Footer/Footer";
import { Product } from "../../Product/Product";


export const RoutesCommerce = () => {
    return(
        <>
            <Container>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/cart" element={ <Cart/> } />
                    <Route path="/product/:item" element={ <Product/> } />
                    <Route path="*"  element={{}} />
                </Routes>
                <Footer/> 
            </Container>
        </>

    )
} 