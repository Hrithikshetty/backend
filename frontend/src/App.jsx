import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  } ); // Adding an empty dependency array to run the effect only once

  return (
    <>
      <h1>hello</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        
        <div key={joke.id}>
          <h3>{joke.id}</h3>
          <h4>{joke.part1}</h4>
          <h4>{joke.part2}</h4>
        <br/>
        </div>
      ))}
    </>
  );
}

export default App;
