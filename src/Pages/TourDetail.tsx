import { useParams } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import img1 from "../assets/dc1.jpeg";
import img2 from "../assets/dc2.jpeg";
import img3 from "../assets/dc3.jpeg";
import img4 from "../assets/dc4.jpeg";
import img5 from "../assets/dc5.jpeg";
import img6 from "../assets/dc6.jpeg";
import img7 from "../assets/dc7.jpeg";
import img8 from "../assets/dc8.jpeg";
import img9 from "../assets/dc9.jpeg";
import img10 from "../assets/dc10.jpeg";
import img11 from "../assets/dc11.jpeg";
import img12 from "../assets/dc12.jpeg";
import img13 from "../assets/dc13.jpeg";
import img14 from "../assets/dc14.jpeg";
import img15 from "../assets/dc15.jpeg";
import img16 from "../assets/dc16.jpeg";

function TourDetail() {
  const { tourName } = useParams();
  const [openDay, setOpenDay] = useState<number | null>(null);

  const tours = {
    "tjedna-kajak": {
      title: "Tjedna kajak tura",
      description: "8 dana aktivnog odmora kroz Elafitske otoke.",
      price: "880 € / osoba",
      included: [
        "7 doručaka",
        "3 ručka",
        "2 večere",
        "Sva kajak oprema",
        "Licencirani vodič",
      ],
      excluded: ["Pića", "Napojnica za vodiča", "Avionske karte"],
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
      gallery: [img1, img2, img3, img4],
      itinerary: [
        {
          title: "1. dan — Dolazak",
          text: "Dolazak, smještaj i upoznavanje s programom ture.",
        },
        {
          title: "2. dan — Lopud – Šunj",
          text: "Kajakaška avantura do plaže Šunj uz kupanje i odmor.",
        },
        {
          title: "3. dan — Šunj – Koločep – Šunj",
          text: "Cjelodnevna kajakaška avantura s posjetom Plavoj špilji.",
        },
        {
          title: "4. dan — Šunj – Trsteno – Lopud",
          text: "Aktivna ruta uz istraživanje obale i povratak na Lopud.",
        },
        {
          title: "5. dan — Lopud – Šipan – Lopud",
          text: "Kajakaška avantura prema Šipanu uz Zelenu špilju.",
        },
        {
          title: "6. dan — Slobodan dan",
          text: "Vrijeme za odmor, kupanje i vlastite aktivnosti.",
        },
        {
          title: "7. dan — Sunset kayaking",
          text: "Večernje veslanje uz zalazak sunca.",
        },
        {
          title: "8. dan — Odlazak",
          text: "Odjava i završetak ture.",
        },
      ],
    },

    "kayak-rafting-adventure": {
      title: "Kayak & Rafting Adventure",
      description: "Kombinacija mora i adrenalina.",
      price: "950 € / osoba",
      included: [
        "7 doručaka",
        "3 ručka",
        "2 večere",
        "Sva kajak oprema",
        "Rafting oprema",
        "Licencirani vodič",
      ],
      excluded: ["Pića", "Napojnica za vodiča", "Avionske karte"],
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80",
      gallery: [img5, img6, img7, img8],
      itinerary: [
        {
          title: "1. dan — Dolazak",
          text: "Dolazak i smještaj.",
        },
        {
          title: "2. dan — Kajak Lopud – Šunj",
          text: "Kajakaška avantura i kupanje.",
        },
        {
          title: "3. dan — Sunset kajak",
          text: "Večernje veslanje uz zalazak sunca.",
        },
        {
          title: "4. dan — Lopud – Šipan",
          text: "Kajak avantura uz istraživanje otoka.",
        },
        {
          title: "5. dan — Transfer u rafting kamp",
          text: "Put prema rafting kampu.",
        },
        {
          title: "6. dan — Rafting avantura",
          text: "Cjelodnevni rafting uz vodiče.",
        },
        {
          title: "7. dan — Povratak",
          text: "Povratak prema Hrvatskoj.",
        },
        {
          title: "8. dan — Odlazak",
          text: "Transfer i završetak programa.",
        },
      ],
    },

    "family-adventure": {
      title: "Family Adventure",
      description: "Obiteljski aktivni odmor.",
      price: "850 € / osoba",
      included: [
        "7 doručaka",
        "3 ručka",
        "2 večere",
        "Sva kajak oprema",
        "Licencirani vodič",
      ],
      excluded: ["Pića", "Napojnica za vodiča", "Avionske karte"],
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      gallery: [img9, img10, img11, img12],
      itinerary: [
        {
          title: "1. dan — Dolazak",
          text: "Dolazak i smještaj.",
        },
        {
          title: "2. dan — Family kajak",
          text: "Lagano veslanje prilagođeno obiteljima.",
        },
        {
          title: "3. dan — SUP zabava",
          text: "Dan zabave na SUP daskama.",
        },
        {
          title: "4. dan — Jutarnje pješačenje na tvrđavu",
          text: "Lagano obiteljsko pješačenje s pogledom.",
        },
        {
          title: "5. dan — Slobodan dan",
          text: "Vrijeme za odmor i vlastite aktivnosti.",
        },
        {
          title: "6. dan — Izlet brodom",
          text: "Obiteljski izlet i istraživanje otoka.",
        },
        {
          title: "7. dan — Sunset family kajak",
          text: "Večernje veslanje uz zalazak sunca.",
        },
        {
          title: "8. dan — Odlazak",
          text: "Odjava i povratak.",
        },
      ],
    },

    "elafiti-short-break": {
      title: "Short Break Elafiti",
      description: "Kratki aktivni odmor.",
      price: "550 € / osoba",
      included: [
        "3 doručka",
        "1 ručak",
        "1 večera",
        "Sva kajak oprema",
        "Licencirani vodič",
      ],
      excluded: ["Pića", "Napojnica za vodiča", "Avionske karte"],
      image:
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1400&q=80",
      gallery: [img13, img14, img15, img16],
      itinerary: [
        {
          title: "1. dan — Dolazak",
          text: "Dolazak i smještaj.",
        },
        {
          title: "2. dan — Kajak Lopud – Šunj",
          text: "Kajakaška avantura i kupanje.",
        },
        {
          title: "3. dan — Šunj – Trsteno – Lopud",
          text: "Cjelodnevna kajak ruta.",
        },
        {
          title: "4. dan — Odlazak",
          text: "Transfer i završetak ture.",
        },
      ],
    },
  };

  const currentTour =
    tours[tourName as keyof typeof tours] || tours["tjedna-kajak"];

  return (
    <div>
      <div
        style={{
          height: "50vh",
          backgroundImage: `url(${currentTour.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h1>{currentTour.title}</h1>
          <p>{currentTour.description}</p>
          <h2>{currentTour.price}</h2>
        </div>
      </div>

      <div style={{ maxWidth: "1000px", margin: "50px auto", padding: "20px" }}>
        <div
          style={{
            background: "#f8fafc",
            padding: "30px",
            borderRadius: "15px",
            marginBottom: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          <div>
            <h2>Što je uključeno</h2>
            <ul>
              {currentTour.included.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Što nije uključeno</h2>
            <ul>
              {currentTour.excluded.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2>Itinerar</h2>

        {currentTour.itinerary.map((day, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              marginBottom: "15px",
              overflow: "hidden",
            }}
          >
            <div
              onClick={() => setOpenDay(openDay === index ? null : index)}
              style={{
                padding: "20px",
                backgroundColor: "#f8fafc",
                cursor: "pointer",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{day.title}</span>
              <span>{openDay === index ? "−" : "+"}</span>
            </div>

            {openDay === index && (
              <div style={{ padding: "20px", backgroundColor: "white" }}>
                {day.text}
              </div>
            )}
          </div>
        ))}

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          <div>
            <h2>Booking kalendar</h2>
            <Calendar />
          </div>

          <div
            style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "15px",
            }}
          >
            <h2>Pošalji upit</h2>

            <input
              placeholder="Ime i prezime"
              style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
            />
            <input
              placeholder="Email"
              style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
            />
            <textarea
              placeholder="Poruka"
              rows={5}
              style={{ width: "100%", padding: "12px", marginBottom: "10px" }}
            />
            <button
              style={{
                padding: "12px 20px",
                background: "#0f172a",
                color: "white",
                border: "none",
                borderRadius: "10px",
              }}
            >
              Pošalji upit
            </button>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <h2>Galerija</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {currentTour.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="tour"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "15px",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;