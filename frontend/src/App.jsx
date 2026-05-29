import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    console.log("Hola mundo");
    fetch("http://127.0.0.1:3000/classes")
      .then((result) => result.json())
      .then((data) => setClasses(data.data));
  }, []);

  return (
    <>
      <ul>
        {classes &&
          classes.map((c) => {
            return <li key={c._id}>{c.test}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
