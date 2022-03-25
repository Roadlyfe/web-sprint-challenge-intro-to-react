import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import axios from "axios";
import "./App.css";
import { setupWorker } from "msw";

const App = () => {
  const [data, setData] = useState();
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return <div className="App">{data && <Character data={data} />}</div>;
};

export default App;
{
  /* <h1 className="Header">FuuuuuuuUck</h1> */
}
