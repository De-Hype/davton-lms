import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";

import Department from "./pages/Department";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";
const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/details" exact element={<ProjectDetails />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/staff" exact element={<Staff />} />
          <Route path="/department" exact element={<Department />} />
          <Route path="/settings" exact element={<Settings />} />
          <Route path="/courses" exact element={<Courses />} />
          <Route path="/reports" exact element={<Reports />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
