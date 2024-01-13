import { useState, useEffect, useContext } from "react"
import "../styles/item.css"
import { CartContext } from "./Routes"

function Item({ itemImage, itemTitle, itemPrice }) {

    const { cartItems, setCartItems } = useContext(CartContext)

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
            let currentItem = cartItems.filter((cartItem) => cartItem.title === selectedItem)
            let filteredItems = cartItems.filter((cartItem) => cartItem.title != selectedItem)
            console.log(filteredItems)
            setCartItems([...filteredItems, {
                title: selectedItem,
                quantity: quantity,
                price: itemPrice
            }])
        }
        return (
            setSelectedItem("")
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
                <input type="button" value="+" onClick={handleIncreaseQuantity} />
                <input type="text" value={quantity} onChange={handleQuantityChange} />
                <input type="button" value="-" onClick={handleDecreaseQuantity} />
            </div>
            <input type="button" value="Add to cart" onClick={() => setSelectedItem(itemTitle)} />
        </div>
    )
}

export default Item