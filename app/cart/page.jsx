'use client';

import { useState, useEffect } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      title: "TypeScript Course",
      quantity: 1,
      price: 300,
      stripePriceId: "price_1TgWhvLzlYAC2kA73wWXMrw1",
    }
  ]);

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('success=1')) {
      setIsSuccess(true);
      setCartItems([]); 
    }
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems }), 
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; 
      }
    } catch (error) {
      console.error("Payment redirect error:", error);
    }
  };

  if (isSuccess) {
    return (
      <div className="p-8 max-w-2xl mx-auto text-center mt-20">
        <div className="bg-green-100 text-green-700 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">🎉 Thank You!</h1>
          <p className="text-xl">Your payment has been successfully processed and your order has been confirmed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 pb-4 border-b last:border-0 last:mb-0 last:pb-0">
              <div>
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="font-bold">${item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <button 
        onClick={handleCheckout}
        disabled={cartItems.length === 0}
        className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition disabled:bg-gray-400"
      >
        Checkout
      </button>
    </div>
  );
}