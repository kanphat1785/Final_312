import "./globals.css";
import Link from "next/link";
export const metadata = {
  title: "Home Coffee",
  description: "Your favorite coffee shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#f8f3ed",
          margin: 0,
          padding: 0,
          fontFamily: "sans-serif",
        }}
      >

        {/* Navbar */}
        <nav
          style={{
            width: "100%",
            padding: "15px 25px",
            background: "#4b2e2b",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <h2 style={{ margin: 0 }}>Fresh Coffee ☕</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link href="/menu" style={{ color: "white", textDecoration: "none" }}>Menu</Link>
            <Link href="/cart" style={{ color: "white", textDecoration: "none" }}>
              🛒 Cart
            </Link>
          </div>
        </nav>

        <main style={{ minHeight: "80vh" }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            background: "#4b2e2b",
            color: "white",
            padding: "20px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Fresh Coffee © 2025  
          <br />
          Aroma • Taste • Happiness
        </footer>

      </body>
    </html>
  );
}
