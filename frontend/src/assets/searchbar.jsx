import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const items = ["Jabuka", "Banana", "Kruška", "Pomorandža", "Grožđe"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        placeholder="Pretraži..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "40%",
          padding: "10px",
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
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)", // Centriranje rezultata
            width: "40%", // 60% širina u odnosu na SearchBar
            margin: "0",
            padding: "0",
            listStyle: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#fff",
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
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
