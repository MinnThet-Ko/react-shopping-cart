import { useState, useEffect, useContext } from "react"
import "../styles/item.css"
import { CartContext, UserContext } from "./Routes"
import { addItemToCart, getCartSnapShot } from "../dao/CartDAO"
import { FaPlus, FaMinus } from "react-icons/fa"

function Item({ itemImage, itemTitle, itemPrice }) {

    const { cartItems, setCartItems } = useContext(CartContext)
    const { user, setUser } = useContext(UserContext)

    const [quantity, setQuantity] = useState(0)
    const [selectedItem, setSelectedItem] = useState("")

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value))
    }

    const handleIncreaseQuantity = () => {
        setQuantity(quantity => quantity + 1)
    }

    const handleDecreaseQuantity = () => {
        setQuantity(quantity => quantity > 0 ? quantity - 1 : 0)
    }

    useEffect(() => {
        if (selectedItem !== "") {
            let filteredItem = cartItems.filter((cartItem) => cartItem.title === selectedItem)
            let filteredItems = cartItems.filter((cartItem) => cartItem.title !== selectedItem)
            let itemId = addItemToCart(user.id, selectedItem, quantity, itemPrice)
            let previousQuantity = filteredItem.length >= 1? filteredItem[0].quantity:0;
            setCartItems([...filteredItems, {
                id: itemId,
                title: selectedItem,
                quantity: previousQuantity + quantity,
                price: itemPrice
            }])
            //setCartItems(getCartSnapShot(user.id))
        }
        return (() => {
            setSelectedItem("")
            setQuantity(0)
        }
        )
    }, [selectedItem])

    return (
        <div className="item">
            <img src={itemImage} />
            <div className="itemInfo">
                <div className="itemTitle">{itemTitle}</div>
                <p>Price: {itemPrice}</p>
            </div>
            <div className="qtyActions">
                <button type="button" className="plusBtn" onClick={handleIncreaseQuantity}><FaPlus /></button>
                <input type="text" className="qtyInput" value={quantity} onChange={handleQuantityChange} />
                <button type="button" className="minusBtn" onClick={handleDecreaseQuantity}><FaMinus /></button>
            </div>
            <input type="button" value="Add to cart" onClick={() => setSelectedItem(itemTitle)} />
        </div>
    )
}

export default Item