import { Link } from "react-router-dom";

function Ture() {
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
        Naše ture
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Link
          to="/ture/tjedna-kajak"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              padding: "25px",
            }}
          >
            <h2>Tjedna kajak tura</h2>
            <p>7-dnevna kajakaška avantura. Polasci svaku subotu.</p>
          </div>
        </Link>

        <Link
          to="/ture/kajak-rafting"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              padding: "25px",
            }}
          >
            <h2>Kajak & Rafting</h2>
            <p>Kombinirana aktivna tura. Polasci svaku subotu.</p>
          </div>
        </Link>

        <Link
          to="/ture/family"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              padding: "25px",
            }}
          >
            <h2>Family tura</h2>
            <p>Avantura za cijelu obitelj.</p>
          </div>
        </Link>

        <Link
          to="/ture/elafiti-short-break"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              width: "300px",
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              padding: "25px",
            }}
          >
            <h2>Short Break Elafiti</h2>
            <p>Kratki odmor po Elafitskim otocima. Polasci četvrtkom.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Ture;