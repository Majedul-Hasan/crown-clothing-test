import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import CatrIcon from '../catrIcon/catrIcon';

import CartDropdoen from '../cartDropdown/cartDropdown'


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
         <Link className="option" to='/shop'>
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


const mapStateTOProps = ({user: {currentUser}, cart: {hidden}}) => ({
   currentUser,
   hidden
})


export default connect(mapStateTOProps)(Header)