import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";
const App = () => {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />  } />
          <Route path="/settings" exact element={<Settings />  } />
          <Route path="/courses" exact element={<Courses />  } />
          </Routes>
          </Router>
    </div>
  )
}

export default App