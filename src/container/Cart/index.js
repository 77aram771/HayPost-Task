import React, {useState, useEffect} from 'react';
import './Cart.scss'
import CartItem from "../../component/CartItem";

let sum = 0;
let percent = 0;
let fullPrice = 0;

export default function Cart({cart, handleRemoveItem, handlePlus, handleMinus}) {

    const [button, setButton] = useState(true)

    sum = 0
    for (let i in cart) {
        sum += parseInt(cart[i].price) * parseInt(cart[i].quantity);
    }
    percent = sum / 100 * 20;
    fullPrice = percent + sum;

    const handleButton = () => {
        setButton(!button)
    }

    return (
        <>
            {
                cart.length > 0
                    ? <div className='cart'>
                        <h1>
                            The Shop
                        </h1>
                        <div className='cart-titles'>
                            <p>Product</p>
                            <span>Price&ensp;Quantity</span>
                        </div>

                        {
                            cart.map(item => {
                                return (
                                    <div key={item.id}>
                                        <CartItem
                                            item={item}
                                            handleRemoveItem={handleRemoveItem}
                                            handlePlus={handlePlus}
                                            handleMinus={handleMinus}
                                        />
                                    </div>
                                )
                            })
                        }

                        <div className='cart-totalBox'>
                            <div className='cart-totalBox__prices'>
                                <div className='cart-totalBox__prices__price'>
                                    <p>Price before <span>VAT</span>:</p>
                                    <span>&euro;{sum}</span>
                                </div>
                                <div className='cart-totalBox__prices__vat'>
                                    <p><span>VAT</span> @ <b>20</b>%:</p>
                                    <span>&euro;{percent}</span>
                                </div>
                            </div>
                            <div className='cart-totalBox__totalPrice'>
                                <i>Total to be paid: </i>
                                <span>&euro;{fullPrice}</span>
                            </div>
                        </div>
                        <div className='cart-buy'>
                            {
                                button
                                ?(
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => handleButton()}
                                        >
                                            Proceed to Checkout
                                        </button>
                                    )
                                    : (
                                        <button
                                            disabled={true}
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => handleButton()}
                                        >
                                            Sending your order…
                                        </button>
                                    )
                            }

                        </div>

                    </div>
                    : null
            }
        </>
    )
}
