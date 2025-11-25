"use client";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) setCart(JSON.parse(items));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ color: "#4b2e2b" }}>Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "10px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item.name}</h3>
              <p>฿{item.price}</p>
            </div>
          ))}

          <h2 style={{ marginTop: 20 }}>Total: ฿{total}</h2>

          <button
            style={{
              marginTop: 20,
              padding: "12px 20px",
              background: "#b26b36",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </main>
  );
}
