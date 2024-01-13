import { useState, createContext } from 'react'
import Routes from './components/Routes'
import './App.css'

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {}
})

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Routes/>
      </CartContext.Provider>
      
    </>
  )
}

export default App
