'use client';

import { useState } from 'react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      title: "Harika Test Ürünü",
      quantity: 1,
      price: 50,
      stripePriceId: "price_100", 
    }
  ]);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }), 
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Stripe URL not received:", data);
      }
    } catch (error) {
      console.error("Payment redirect error:", error);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4 pb-4 border-b last:border-0 last:mb-0 last:pb-0">
            <div>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-500">Adet: {item.quantity}</p>
            </div>
            <p className="font-bold">${item.price}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={handleCheckout}
        className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-gray-800 transition"
      >
        Checkout
      </button>
    </div>
  );
}