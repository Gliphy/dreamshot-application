import React, {useState, createContext} from 'react';
import styles from '../styles/App.module.scss';
import { MenuItemsData, getMenuItemsData } from './Menu/data';

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},


});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);


    function getProductQuantity(id) {
       const quantity = cartProducts.find(product => product.id === id)?.quantity;

       if (quantity === undefined) {
        return 0;
       }

       return quantity

    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product

                )
            )

        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return 0 ;
            })
            
        )
    }

    function getTotalCost(id){
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getMenuItemsData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    function cartReset() {
        const emptyCart = () => {
            cartProducts.empty()
            .then(res => {
                setCartProducts(null)
            })
        }
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>

    )

}

export default CartProvider;
