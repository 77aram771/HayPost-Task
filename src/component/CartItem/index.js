import React from 'react';
import './CartItem.scss';

export default function CartItem({item, handleRemoveItem, handlePlus, handleMinus}) {
    return (
        <div className='cartItem'>
            <div className='cartItem-box1'>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <div className='cartItem-box1__button' onClick={() => handleRemoveItem(item.id)}>
                    <p>Remove</p>
                </div>
            </div>
            <div className='cartItem-box2'>
                <div className='cartItem-box2__container'>
                    <p>&euro;{item.price}</p>
                    <div className='cartItem-box1__container-quantity'>
                        <input type="text" value={item.quantity} readOnly/>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleMinus(item.id)}
                        >-</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handlePlus(item.id)}
                        >+</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
