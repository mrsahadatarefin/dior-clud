import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/ContextProvider';

const CheckoutForm = ({allSum,order}) => {
  const {user}=useContext(AuthContext)
 
  const [cardError,setCartError]=useState('')
  const [clientSecret, setClientSecret] = useState("");
  const [ transactionId,setTransactionId]= useState('')
   const [success,setSuccess]=useState('')
  const [processing, setProcessing]= useState(false)
   const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://dior-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({allSum }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [allSum]);



    const  handleSubmit= async (event)=>{
event.preventDefault()
if(!stripe || !elements || processing ){
return
}
const card = elements.getElement(CardElement);

 if(card === null){

    return;
 }


 const {error,paymentMethod} = await stripe.createPaymentMethod({

type:'card',
card


 })

if(error){
console.log(error)
setCartError(error.message)
}
else{
    setCartError('')

}
setSuccess('')
setProcessing(true)


const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name:user.displayName,
        email:user.email
      },
    },
  },
);
if(confirmError){
setCartError(confirmError.message)
return;
}
if(paymentIntent.status === "succeeded" ){

  setSuccess(' congrats! your payment completed');
  setTransactionId(paymentIntent.id)
 
}
setProcessing(false)
console.log('paymentIntent',paymentIntent)


    }
   
    return (
        <div>
         <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='mt-10 btn btn-sm border-solid rounded-sm bg-white text-black hover:text-white  ' type="submit" disabled={!stripe || !clientSecret}>
      OnLine  Pay
      </button>
    </form>  
    <p className='text-red-600'>{cardError}</p> 
    {
success &&  <div>
  <p className='text-green-500'>{success}
    </p>

    <p> your transactionId : <span className=' font-bold'> {transactionId}</span></p>
</div> 
      
    }


        </div>
    );
};

export default CheckoutForm;