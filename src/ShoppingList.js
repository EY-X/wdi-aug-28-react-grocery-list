import React from 'react';
import Product from './Product'


const shoppingList = () => {
    return(
        <ul id="shoppingList" className="shoppinglist">
            <Product />
            <Product />
            <Product />
            <Product />
        </ul>
    )
};

export default shoppingList;