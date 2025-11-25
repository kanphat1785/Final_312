import "./globals.css";

export const metadata = {
  title: "Fresh Coffee",
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
