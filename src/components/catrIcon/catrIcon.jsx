import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action'


import {ReactComponent as ShopingIcon} from '../../assets/shopping-bag.svg';
import './catrIcon.scss';

import {selectCartItemsCount} from '../../redux/cart/cart.selector'




const CatrIcon =({toggleCartHidden, itemCount})=>(
   <div className = 'cart-icon' onClick={toggleCartHidden}>
      <ShopingIcon className ='shopping-icon' />
      <span className='item-count'>{itemCount}</span>


   </div>
) 


const mapDispatchToProps = dispatch=>({
   toggleCartHidden: ()=>dispatch(toggleCartHidden())
});

const mapStateToProps= (state)=>{
   // console.log('i am called');
   return ({
   itemCount: selectCartItemsCount(state)
})

}

export default connect(mapStateToProps, mapDispatchToProps)(CatrIcon)