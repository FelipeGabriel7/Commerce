import { CommerceProvider } from "./contexts/commerceContext/context"
import { RoutesCommerce } from "./components/templates/Routes/RoutesCommerce"
import { CartProvider } from "./contexts/cartContext/cartContext"


function App() {
  return (
    <>
      <CommerceProvider>
        <CartProvider>
          <RoutesCommerce/>
        </CartProvider>
      </CommerceProvider>
    </>
  )
}

export default App
