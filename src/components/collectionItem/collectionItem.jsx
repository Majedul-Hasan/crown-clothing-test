import React from 'react'
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButton';

import {addItem} from '../../redux/cart/cart.action'
import './collectionItem.scss';



const CollectionItem =({item, addItem })=>{
   const { imageUrl, name, price } =item


   return(

   <div className="collection-item">
      <div 
      style={{
         backgroundImage: `url(${imageUrl})`
      }}
      
      className="image"
      ></div>
         <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>

         </div>
         <CustomButton inverted onClick={()=> addItem(item)}  >Add To Cart</CustomButton>


      
   </div>
)}

const mapDiscatchToProps= dispatch=>({
   addItem: item=> dispatch(addItem(item))
})

export default connect(null, mapDiscatchToProps)(CollectionItem)