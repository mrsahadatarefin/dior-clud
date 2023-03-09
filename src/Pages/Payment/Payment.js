import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe('pk_test_51MjewJLDPp6NgYfuF2tn44kX4q97Rkcpi6LOB0ZCvIT3dHZ64e0vUdIp3K50ksl9BZmuO0PcQZUS8lyj06pdMSyF00z89YiAUA')
console.log(stripePromise)
const Payment = ({order,allSum}) => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-black text-center'>Payment your orders</h1>
          <div className='w-96 my-20  m-auto '>
          <Elements stripe={stripePromise}>
      <CheckoutForm order={order} allSum={allSum} />
    </Elements>
          </div>
        </div>
    );
};

export default Payment;