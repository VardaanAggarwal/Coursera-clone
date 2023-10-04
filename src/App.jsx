import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { AppBar } from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCourse from "./components/AddCourse";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Router>
        <AppBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addcourse" element={<AddCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
