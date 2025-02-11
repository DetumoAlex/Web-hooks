import { useSelector } from 'react-redux';
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";


const Checkout = (item) => {
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const FLUTTER_PUBLIC_KEY =import.meta.env.VITE_PUBLIC_KEY

  const config = {
    public_key: FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount:totalAmount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070**',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

   const fwConfig = {
      ...config,
      text: 'Proceed',
      callback: (response) => {
         console.log(response);
        closePaymentModal() 
      },
      onClose:()=>{},
  };

  return (
    <div className='relative '>
        <div className=" text-xl p-4">
      <h2 className="mb-3 text-xl font-bold">Checkout:</h2>
      <div className="flex justify-between ">
        {/* <img src="" alt="" /> */}
          <ul className='font-semibold'>
            {cartItems.map((item, index) => (
              <li key={index} className='mb-3 '>{item.title} </li>
            ))}

            {/* <li>{item.price}</li> */}
          </ul>
          <ul className="font-bold ">
            {cartItems.map((item, index) => (
              <li key={index} className='mb-3'> ${item.price}</li>
            ))}
          </ul>
        </div>
      <p className="font-bold absolute right-0 mt-4">Total: ${totalAmount}</p>
    </div>

    {/* <div className='rounded text-center text-2xl mt-10 bg-black text-white p-2 w-1/4 '>
        <button>Pay</button>
    </div> */}
    <FlutterWaveButton className="text-2xl font-semibold bg-black rounded-lg p-2 w-1/5 mt-10 text-white cursor-pointer"
        {...fwConfig}
        />
    </div>
  );
};

export default Checkout;