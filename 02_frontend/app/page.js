export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#4b2e2b" }}>
        Welcome to Fresh Coffee ☕
      </h1>

      <p style={{ fontSize: "1.2rem", color: "#7a5f57" }}>
        Brewed with passion. Served with love.
      </p>

      <a href="/menu">
        <button
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            fontSize: "1rem",
            background: "#b26b36",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          View Menu
        </button>
      </a>
    </main>
  );
}
