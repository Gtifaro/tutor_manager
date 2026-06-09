import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassView from "./pages/classes";
import EditClassView from "./pages/classes/edit";
import CreateClassView from "./pages/classes/create";
import Navbar from "./components/navigation/Navbar";
import GroupView from "./pages/groups";
import EditGroupView from "./pages/groups/edit";
import CreateGroupView from "./pages/groups/create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/classes" element={<ClassView />} />
          <Route path="/classes/edit/:id" element={<EditClassView />} />
          <Route path="/classes/create" element={<CreateClassView />} />
          <Route path="/groups" element={<GroupView />} />
          <Route path="/groups/edit/:id" element={<EditGroupView />} />
          <Route path="/groups/create" element={<CreateGroupView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
