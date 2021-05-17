import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CatrIcon from '../catrIcon/catrIcon';

import {createStructuredSelector} from 'reselect'

import CartDropdoen from '../cartDropdown/cartDropdown'

import {selectCartHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'




import {ReactComponent as Logo } from '../../../src/assets/crown.svg';
import {auth } from '../../firebase/firebase'


import './header.scss'



const Header =({currentUser, hidden})=>(
   <div className="header">
      <Link to='/'>
         <Logo className="logo" />


      </Link>
      <div className="options">
         <Link className="option" to='/shop'>
            shop
         </Link>
         <Link className="option" to='/contact'>
            contact
         </Link>
          {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          sign out
        </div>
      ) : (
        <Link className='option' to='/signin'>
          sign in
        </Link>
      )}
      {/* <CartComponent currentUser={currentUser}/> */}
      <CatrIcon />
      </div>
      {
      hidden ? null : <CartDropdoen />
      }
      </div>
)


const mapStateTOProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})


export default connect(mapStateTOProps)(Header)