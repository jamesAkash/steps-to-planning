import { useState } from "react";

const messages = [
  "Planning - Here you make your blue print💻",
  "Prioritizing - Know what to discard🗑️ and accept✅",
  "Performing - pull up your socks and get your hands dirty😈",
];

function App() {
  const [page, setPage] = useState(0);
  const handleClick = (e) => {
    const name = e.target.name;
    if (name === "prev-page") {
      if (page > 0) setPage((prev) => prev - 1);
      if (page === 0) {
        setPage(2);
      }
    }
    if (name === "next-page") {
      if (page < 2) setPage((prev) => prev + 1);
      else if (page === 2) {
        setPage(0);
      }
    }
  };
  return (
    <div className="steps">
      <h1 className="header">The three P's of time management</h1>
      <div className="numbers">
        <div
          className={`${page >= 0 ? "active" : ""}`}
          onClick={() => setPage(0)}
        >
          1
        </div>
        <div
          className={`${page >= 1 ? "active" : ""}`}
          onClick={() => setPage(1)}
        >
          2
        </div>
        <div
          className={`${page >= 2 ? "active" : ""}`}
          onClick={() => setPage(2)}
        >
          3
        </div>
      </div>
      <p className="message">{messages[page]}</p>
      <div className="buttons">
        <button
          name="prev-page"
          onClick={(e) => handleClick(e)}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={(e) => handleClick(e)}
          name="next-page"
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
