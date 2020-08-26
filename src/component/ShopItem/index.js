import React from 'react';
import './ShopItem.scss';

export default function ShopItem({item, handleAddCart}) {
    return (
        <div className='shop-item'>
            <div>
                <h6>{item.name}</h6>
                <p>{item.title}</p>
            </div>
            <div className='shop-item__footer'>
                <button onClick={() => handleAddCart(item.id)} className="shop-item__footer-button btn success">Add to cart</button>
                <span>&euro;{item.price}</span>
            </div>
        </div>
    )
}
