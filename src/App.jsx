import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";
import AdminSidebar from "./Components/AdminSidebar";
import Header from "./Components/Header";
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
