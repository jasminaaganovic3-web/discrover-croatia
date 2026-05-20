import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Ture from "./Pages/Ture";
import Onama from "./Pages/Onama";
import Kontakt from "./Pages/Kontakt";
import TourDetail from "./Pages/TourDetail";
import DN1 from "./assets/DN1.jpg";
import dc2 from "./assets/dc2.jpeg";
import dc3 from "./assets/dc3.jpeg";
import dc4 from "./assets/dc4.jpeg";

function TourCard({ title, image }: { title: string; image: string }) {
  return (
    <div
      style={{
        width: "300px",
        height: "400px",
        borderRadius: "20px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
        padding: "20px",
        color: "white",
        fontSize: "1.8rem",
        fontWeight: "bold",
      }}
    >
      {title}
    </div>
  );
}

function App() {
  const [showToursMenu, setShowToursMenu] = useState(false);
  const [, setShowActivities] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowActivities(true);
    }, 300);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          padding: "15px 20px",
          backgroundColor: "rgba(0,0,0,0.4)",
          color: "white",
          zIndex: 1000,
          boxSizing: "border-box",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "clamp(1.5rem, 5vw, 2rem)",
            fontWeight: "bold",
          }}
        >
          Discrover Croatia
        </Link>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Početna
          </Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowToursMenu(true)}
            onMouseLeave={() => setShowToursMenu(false)}
          >
            <button
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                padding: "10px",
              }}
            >
              Ture
            </button>

            {showToursMenu && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  minWidth: "250px",
                  zIndex: 2000,
                }}
              >
                <Link
                  to="/ture/tjedna-kajak"
                  onClick={() => setShowToursMenu(false)}
                  style={menuStyle}
                >
                  Tjedna kajak tura
                </Link>

                <Link
                  to="/ture/kayak-rafting-adventure"
                  onClick={() => setShowToursMenu(false)}
                  style={menuStyle}
                >
                  Kayak & Rafting Adventure
                </Link>

                <Link
                  to="/ture/family-adventure"
                  onClick={() => setShowToursMenu(false)}
                  style={menuStyle}
                >
                  Family Adventure
                </Link>

                <Link
                  to="/ture/elafiti-short-break"
                  onClick={() => setShowToursMenu(false)}
                  style={menuStyle}
                >
                  Short Break Elafiti
                </Link>
              </div>
            )}
          </div>

          <Link to="/onama" style={{ color: "white", textDecoration: "none" }}>
            O nama
          </Link>

          <Link
            to="/kontakt"
            style={{ color: "white", textDecoration: "none" }}
          >
            Kontakt
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <header
                style={{
                  backgroundImage: `url(${DN1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 5rem)",
                    fontFamily: "'Georgia', serif",
                    fontWeight: "700",
                    letterSpacing: "3px",
                    textShadow: "2px 4px 15px rgba(0,0,0,0.5)",
                    marginBottom: "10px",
                  }}
                >
                  Discrover Croatia
                </h1>

                <p>Kajakaške ture i avanture u Hrvatskoj i Crnoj Gori</p>

                <Link
                  to="/ture"
                  style={{
                    padding: "15px 30px",
                    backgroundColor: "#0099ff",
                    borderRadius: "10px",
                    color: "white",
                    textDecoration: "none",
                    marginTop: "20px",
                  }}
                >
                  Pogledaj ture
                </Link>
              </header>

              <section
                style={{
                  padding: "100px 20px",
                  backgroundColor: "#f8fafc",
                  textAlign: "center",
                }}
              >
                <h2 style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}>
                  Naše aktivnosti
                </h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                    marginTop: "50px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link to="/ture" style={{ textDecoration: "none" }}>
                    <TourCard title="Kajaking" image={dc2} />
                  </Link>

                  <Link to="/ture" style={{ textDecoration: "none" }}>
                    <TourCard title="Hiking" image={dc3} />
                  </Link>

                  <Link to="/ture" style={{ textDecoration: "none" }}>
                    <TourCard title="Rafting" image={dc4} />
                  </Link>
                </div>
              </section>
            </>
          }
        />

        <Route path="/ture" element={<Ture />} />
        <Route path="/ture/:tourName" element={<TourDetail />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      <footer
        style={{
          padding: "80px 20px",
          backgroundColor: "#1e293b",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2>Kontaktirajte nas</h2>

        <p>
          <a
            href="mailto:info@discovercroatia.com.hr"
            style={{ color: "white" }}
          >
            info@discovercroatia.com.hr
          </a>
        </p>

        <p>
          <a href="tel:+385915515687" style={{ color: "white" }}>
            +385 91 551 5687
          </a>
        </p>

        <p>Zagreb, Hrvatska</p>
      </footer>
    </>
  );
}

const menuStyle = {
  display: "block",
  padding: "15px 20px",
  textDecoration: "none",
  color: "#111",
};

export default App;