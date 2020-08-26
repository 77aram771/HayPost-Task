import React from 'react';
import './Shop.scss'
import ShopItem from "../../component/ShopItem";
import {ShopItems} from "../../utils/MockDate";

export default function Shop({handleAddCart}) {
    return (
        <div className='shop'>
            <h1>
                The Shop
            </h1>
            <p>
                Ahoy landman! Pick what you need for the big trip.
                You gonna be out there some days, so better leave prepared.
            </p>
            <p className='shop-p'>
                Please note: All prices are without <span>VAT!</span>
            </p>
            <div className='shop-items__container'>
                {
                    ShopItems.map(item => {
                        return (
                            <div key={item.id}>
                                <ShopItem item={item} handleAddCart={handleAddCart}/>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
