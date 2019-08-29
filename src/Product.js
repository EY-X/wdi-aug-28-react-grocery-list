import React from 'react';

const Product = ({item, quantity, category}) => {

    return(
        <li class={category}>
            <button>-</button>
            <span>{quantity} {item}'s</span>
            <button>+</button>
        </li>
    )
};


export default Product;