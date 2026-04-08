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
    const res = await fetch("api/funnyJoke", {
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
      <button className="joke-btn" onClick={getFunnyJoke}>
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
