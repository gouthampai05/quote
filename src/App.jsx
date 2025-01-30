import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [saidBy, setSaidBy] = useState("");
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    fetch("https://qapi.vercel.app/api/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setSaidBy(data.author);
      })
      .catch((error) => console.error("Fetch error:", error));
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={`flex bg-red-400 justify-center h-screen items-center`}>
      {/*Card*/}
      <div className="flex-col bg-white rounded-2xl shadow-xl px-24 py-30">
        <h1 className={`font-black text-3xl text-red-400`}>{quote}</h1>
        <h2 className="text-gray-500">- {saidBy}</h2>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button
              className={`bg-red-400 p-2 px-3 rounded-xl shadow-md text-white font-bold`}
            >
              X
            </button>
            <button
              className={`bg-red-400 p-2 px-3 rounded-xl shadow-md text-white font-bold`}
            >
              T
            </button>
          </div>
          <button
            onClick={getQuote}
            className={`bg-red-400 p-3 rounded-2xl shadow-md text-white font-bold`}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
