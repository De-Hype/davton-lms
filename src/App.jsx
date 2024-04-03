import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Coures from "./pages/Coures";
const App = () => {
 
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />  } />
          <Route path="/settings" exact element={<Settings />  } />
          <Route path="/courses" exact element={<Coures />  } />
          </Routes>
          </Router>
    </div>
  )
}

export default App