import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassView from "./pages/classes";
import EditClassView from "./pages/classes/edit";
import CreateClassView from "./pages/classes/create";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/classes" element={<ClassView />} />
          <Route path="/classes/edit/:id" element={<EditClassView />} />
          <Route path="/classes/create" element={<CreateClassView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
