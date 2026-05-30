import "./App.css";
import { useClasses } from "./controller/useClasses";
import { ClassList } from "./components/classList";

function App() {
  const { classes, loading } = useClasses();

  return <ClassList classes={classes} loading={loading} />;
}

export default App;
