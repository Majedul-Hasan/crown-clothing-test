import React from 'react';
import SignIn from '../../components/sign-in/signin'
import SignUp from '../../components/signUp/signUp'

import './signinandsignup.scss';


const signinandsignup = ()=>(
   <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />

   </div>
)

export default signinandsignup