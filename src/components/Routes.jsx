import { useState, createContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider, useSearchParams } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage"; 
import MainPage from "./MainPage";
import ShoppingCart from "./ShoppingCart";
import ProfilePage from "./ProfilePage";

//declearing contexts that will be used throughout the app
export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => { }
})

export const UserContext = createContext({
    user: {
        id: "",
        email: "",
        password: ""
    },
    setUser: () => { }
})

const Routes = () => {

    const [cartItems, setCartItems] = useState([])
    const [user, setUser] = useState({
        id: "",
        email: "",
        password: ""
    })

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage />,
        },
        {
            path: "/register",
            element: <RegisterPage />,
        },
        {
            path: "/home",
            element: <MainPage />,
        },
        {
            path: "/cart",
            element: <ShoppingCart />
        },
        {
            path: "/profile",
            element: <ProfilePage />
        },
    ]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <CartContext.Provider value={{ cartItems, setCartItems }}>
                <RouterProvider router={routes} />
            </CartContext.Provider>
        </UserContext.Provider>
    )
}



export default Routes 