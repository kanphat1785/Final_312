"use client";
import { useState, useEffect } from "react";

export default function MenuPage() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/products`)
      .then((res) => res.json())
      .then(setMenu);
  }, []);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${item.name} added to cart!`);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ color: "#4b2e2b", marginBottom: 20 }}>Coffee Menu</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {menu.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
              padding: "15px",
            }}
          >
            <img
              src={item.image}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3 style={{ marginTop: 10 }}>{item.name}</h3>
            <p style={{ color: "#b26b36", fontWeight: "bold" }}>฿{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              style={{
                marginTop: 10,
                padding: "10px",
                width: "100%",
                background: "#4b2e2b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
