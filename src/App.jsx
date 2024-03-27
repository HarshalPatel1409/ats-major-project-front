import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

//! Candidate
import CandidateLayout from "./routes/CandidateLayout ";

//! Employer
import EmployerLayout from "./routes/EmployerLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/candidate/*" element={<CandidateLayout />} />
      <Route path="/employer/*" element={<EmployerLayout />} />
    </Routes>
  );
}

export default App;
