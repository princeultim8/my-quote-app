import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarLoader } from "react-spinners";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      const response = await axios.get("https://api.quotable.io/random");
      const data = response.data;
      setQuote(data.content);
      setAuthor(data.author);
      setLoading(false);
    }
    fetchQuote();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <BarLoader color={"#36D7B7"} />
        </div>
      ) : (
        <div className="quote-container">
          <h1 className="quote">{quote}</h1>
          <h2 className="author">- {author}</h2>
          <button onClick={() => setLoading(true)}>Get Quote</button>
        </div>
      )}
    </div>
  );
}

export default App;
