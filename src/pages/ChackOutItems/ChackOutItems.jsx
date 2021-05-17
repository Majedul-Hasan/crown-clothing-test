import React from 'react';

import "./ChackOutItems.scss"


const ChackOutItems =({cartItem:{price, imageUrl, name, quantity}})=>(
   <div className="checkout-item">
      <div className="image-container">
         <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}
         
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">
          &#10005;
      </div>
   </div>
)


export default ChackOutItems