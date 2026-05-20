function Kontakt() {
  return (
    <div
      style={{
        paddingTop: "120px",
        padding: "120px 50px",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "50px",
        }}
      >
        Kontakt
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Kontakt informacije</h2>

          <p><strong>CEO:</strong> Amir Aganović</p>
          <p>📞 +385 91 885 6177</p>

          <p style={{ marginTop: "20px" }}>
            <strong>Sales Manager:</strong> Jasmina Aganović
          </p>
          <p>📞 +385 91 551 5687</p>

          <p style={{ marginTop: "20px" }}>
            <strong>Email:</strong> info@discrover.com.hr
          </p>

          <p>
            <strong>Sjedište:</strong><br />
            Trg bana Josipa Jelačića 6<br />
            10000 Zagreb
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Pošaljite upit</h2>

          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              placeholder="Ime i prezime"
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="email"
              placeholder="Email adresa"
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="tel"
              placeholder="Broj telefona"
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            <textarea
              placeholder="Vaša poruka"
              rows={6}
              style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "15px",
                backgroundColor: "#0284c7",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Pošalji upit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;