import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";
import AdminSidebar from "./Components/AdminSidebar";
import Header from "./Components/Header";
import Department from "./pages/Department";
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
const App = () => {
  return (
    <>
      <Router>
        <div className="">
          <Header />
          <div className="flex">
            <AdminSidebar />
            <div
              style={{ width: "calc(100% - 250px)" }}
              className="overflow-y-auto min-h-full"
            >
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="staff" exact element={<Staff />} />
                <Route path="/department" exact element={<Department />} />
                <Route path="/settings" exact element={<Settings />} />
                <Route path="/courses" exact element={<Courses />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
