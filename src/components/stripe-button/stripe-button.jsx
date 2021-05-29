import React from 'react';


import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{

   const priceForStripe = price*100;
   const publishableKey = 'pk_test_51IwUWvKtZw3FA0k5htnB10NixHjHRPvk9EEIbuLFVBsaLrKR17VjA0o1RE1mGaHhxhNzF4OoUKDN7CzYZqNxMkum00VH3IGNZL'

   const onToken = (token) => {
      console.log(token);
      alert('payment Successful')
   //  fetch('/save-stripe-token', {
   //    method: 'POST',
   //    body: JSON.stringify(token),
   //  }).then(response => {
   //    response.json().then(data => {
   //      alert(`We are in business, ${data.email}`);
   //    });
   //  });
   // //https://github.com/azmenak/react-stripe-checkout
  }

   return(

      <StripeCheckout 
       label="Pay Now" 
        name="Crwn clothing ltd" 
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount ={priceForStripe }
         panelLabel="Pay Now"
         token = {onToken}
         stripeKey = {publishableKey}
      
      
      />
   )
}

export default StripeCheckoutButton