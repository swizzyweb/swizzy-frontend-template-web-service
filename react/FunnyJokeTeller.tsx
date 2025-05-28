import React, { useState, useEffect } from "react";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

export function FunnyJokeTeller(props: any) {
  let [joke, setJoke] = useState<Joke>();
  let [setupText, setSetupText] = useState("");
  let [punchlineText, setPunchlineText] = useState("");
  let [categoryText, setCategoryText] = useState("");
  async function getFunnyJoke() {
    const res = await fetch("http://localhost:3005/api/funnyJoke", {
      method: "get",
    });
    const body = await res.json();
    const newFunnyJoke = body.joke;
    setJoke(newFunnyJoke);
    setSetupText(newFunnyJoke.setup);
    setPunchlineText(newFunnyJoke.punchline);
    setCategoryText(newFunnyJoke.type);
  }

  return (
    <section id="funny-joke">
      {" "}
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 mt-5 mb-5"
        onClick={getFunnyJoke}
      >
        Get funny joke
      </button>
      {joke && (
        <div>
          <div>{setupText}</div>
          <div>{punchlineText}</div>
        </div>
      )}
    </section>
  );
}
