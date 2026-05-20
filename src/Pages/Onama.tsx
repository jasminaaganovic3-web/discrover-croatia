import AA from "../assets/AA.jpeg";
import JA from "../assets/JA.jpeg";
import AH from "../assets/AH.jpeg";
import DISC1 from "../assets/DICSC1.jpeg";
function Onama() {
  const team = [
    {
      name: "Amir Aganović",
      role: "Osnivač i direktor avanturističkih programa",
      image: AA,
      description:
        "Amir je osnivač Discover Croatia i osoba koja stoji iza vizije aktivnog odmora, avanture i autentičnih putovanja. Dugogodišnje iskustvo u outdoor aktivnostima, vođenju grupa i organizaciji aktivnih programa omogućilo mu je stvaranje iskustava koja gostima pružaju više od običnog putovanja — stvarne uspomene, prirodu i avanturu.",
    },
    {
      name: "Jasmina Aganović",
      role: "Voditeljica prodaje i marketinga",
      image: JA,
      description:
        "S više od 12 godina iskustva u turizmu i radu s klijentima, od čega 9 godina na menadžerskim pozicijama, Jasmina je specijalizirana za aktivni odmor za sve uzraste. Njezin fokus uključuje travel planning, korisničku podršku, razvoj partnerskih odnosa, prodaju i marketing, osiguravajući svakom gostu vrhunsko i bezbrižno iskustvo.",
    },
    {
      name: "Aida Handanović",
      role: "Voditeljica ureda i korisnička podrška",
      image: AH,
      description:
        "S više od 10 godina iskustva u organizaciji i korisničkoj podršci, Aida je osoba koja osigurava da svaki gost ima besprijekorno iskustvo od prvog upita do dolaska na željenu destinaciju, kao i tijekom cijelog boravka. Njezina organiziranost i predanost čine svaki detalj putovanja jednostavnijim i ugodnijim.",
    },
  ];

  return (
    <div>
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.45)",
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "850px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              marginBottom: "20px",
              fontFamily: "'Georgia', serif",
            }}
          >
            O nama
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.7",
            }}
          >
            Kreiramo nezaboravna iskustva aktivnog odmora kroz Hrvatsku za
            avanturiste, obitelji i sve ljubitelje prirode.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "80px auto",
          padding: "20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={DISC1}
            alt="Avantura"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        <div>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
            }}
          >
            Naša priča
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
              color: "#334155",
            }}
          >
            Discover Croatia nastao je iz strasti prema prirodi, aktivnom
            odmoru i autentičnim iskustvima. Vjerujemo da putovanja trebaju biti
            više od običnog obilaska destinacije — trebaju stvarati uspomene,
            povezivati ljude i pružati osjećaj istinske avanture.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              fontSize: "1.1rem",
              color: "#334155",
              marginTop: "20px",
            }}
          >
            Od kajakaških avantura kroz kristalno čisto more, istraživanja
            skrivenih otoka i obiteljskih aktivnih odmora do adrenalinskih
            iskustava — kreiramo programe prilagođene svim generacijama i svim
            vrstama putnika.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#f8fafc",
          padding: "100px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Upoznajte naš tim
          </h2>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#64748b",
              marginBottom: "60px",
            }}
          >
            Iskusni profesionalci posvećeni stvaranju vrhunskih iskustava.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "30px" }}>
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      marginBottom: "10px",
                    }}
                  >
                    {member.name}
                  </h3>

                  <p
                    style={{
                      color: "#0f172a",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    {member.role}
                  </p>

                  <p
                    style={{
                      color: "#475569",
                      lineHeight: "1.7",
                    }}
                  >
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1100px",
          margin: "100px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            marginBottom: "40px",
          }}
        >
          Zašto odabrati nas
        </h2>

       <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
  }}
>
          {[
            "Lokalno iskustvo i poznavanje destinacija",
            "Personalizirano planiranje putovanja",
            "Aktivni odmor za sve uzraste",
            "Vrhunska korisnička podrška",
            "Autentična iskustva u Hrvatskoj",
          ].map((item, index) => (
            <div
              key={index}
style={{
  backgroundColor: "#f8fafc",
  padding: "30px",
  borderRadius: "20px",
  fontWeight: "bold",
  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  textAlign: "center",
  minHeight: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ...(index === 3 && { gridColumn: "1 / 2", marginLeft: "170px" }),
  ...(index === 4 && { gridColumn: "2 / 3", marginLeft: "170px" }),
}}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Onama;