import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ClassView } from "./pages/classes/classView";
import { EditClassView } from "./pages/classes/edit/EditClassView";
import { CreateClassView } from "./pages/classes/create/CreateClassView";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/classes" element={<ClassView />} />
        <Route path="/classes/edit/:id" element={<EditClassView />} />
        <Route path="/classes/create" element={<CreateClassView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
