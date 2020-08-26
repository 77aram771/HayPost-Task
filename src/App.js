import React, {useState, useEffect} from 'react';
import RouterMapping from "./container/RouterMapping";
import Shop from "./container/Shop";
import Cart from "./container/Cart";
import './style.scss';
import {ShopItems} from "./utils/MockDate";

function App() {

    const [cart, setCart] = useState([]);
    const [cartPrice, setCartPrice] = useState([]);

    const handleAddCart = (id) => {
        if (cart.length > 0) {
            let itemId = cart.find(i => i.id === id);
            if (itemId !== undefined) {
                setCart(cart.map(item => {
                    if (item.id === id) {
                        item.quantity = item.quantity + 1;
                    }
                    return item;
                }));
            } else {
                const newCartItem = ShopItems.find(element => element.id === id);
                newCartItem.quantity = 1;
                setCart(
                    cart.concat([newCartItem])
                )
            }

        } else {
            const newCartItem = ShopItems.find(element => element.id === id);
            newCartItem.quantity = 1;
            setCart(
                cart.concat([newCartItem])
            )
        }

    };

    const handleRemoveItem = (id) => {
        setCart(
            cart.filter(item => item.id !== id)
        )
    };

    const handlePlus = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                item.quantity = item.quantity + 1;
            }
            return item;
        }));
    }

    const handleMinus = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    item.quantity = item.quantity - 1;
                }
            }
            return item;
        }));
    }

    return (
        <div className="containerBox">
            <RouterMapping/>
            <div className='containerBox-mine'>
                <Shop handleAddCart={handleAddCart}/>
                <Cart
                    handleRemoveItem={handleRemoveItem}
                    handlePlus={handlePlus}
                    handleMinus={handleMinus}
                    cart={cart}
                />
            </div>
        </div>
    );
}

export default App;
