import { useState } from "react";

const SearchBar1 = () => {
  const [query, setQuery] = useState("");
  const items = ["Jabuka", "Banana", "Kruška", "Pomorandža", "Grožđe"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ position: "relative", width: "100%", textAlign: "right" }}>
      <input
        type="text"
        placeholder="Pretraži..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "30%", // Još uži input
          padding: "8px", // Manje paddinga
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      {/* Prikazuje rezultate samo ako postoji unos u polju */}
      {query && filteredItems.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%", // Postavljanje rezultata odmah ispod inputa
            right: "0", // Poravnanje sa desnom ivicom
            width: "30%", // 30% širina u odnosu na SearchBar
            margin: "10px 0 0 0", // Dodajemo razmak između inputa i rezultata
            padding: "0",
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "blue", // Plava pozadina
            color: "white", // Bela boja teksta
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                cursor: "pointer",
                transition: "background-color 0.2s",
                textAlign: "center", // Centriranje teksta
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "white"; // Bela pozadina na hover
                e.currentTarget.style.color = "blue"; // Plavi tekst na hover
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent"; // Vraća na transparent
                e.currentTarget.style.color = "white"; // Vraća tekst na beli
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar1;
