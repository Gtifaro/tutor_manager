import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { ClassView } from "./view/classes/classView";
import { EditClassView } from "./view/classes/edit/EditClassView";
import { CreateClassView } from "./view/classes/create/CreateClassView";

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
