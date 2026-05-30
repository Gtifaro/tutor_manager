import "./App.css";
import { useClasses } from "./controller/useClasses";
import { ClassList } from "./components/classList";

function App() {
  const { classes, loading } = useClasses();

  return (
    <>{loading ? <p>Cargando clases...</p> : <ClassList classes={classes} />}</>
  );
}

export default App;
