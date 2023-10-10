import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import { AppBar } from "./components/AppBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import UpdateCourse from "./components/UpdateCourse";
function App() {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        width: "100vw",
        minHeight: "100vh",
        maxHeight: "100%",
      }}
    >
      <Router>
        <AppBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<UpdateCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
