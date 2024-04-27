import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import Login from "./components/Common/Login";

import MainLayout from "./routes/MainLayout";

//! Candidate
import CandidateLayout from "./routes/CandidateLayout ";

//! Employer
import EmployerLayout from "./routes/EmployerLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/candidate/*" element={<CandidateLayout />} />
      <Route path="/employer/*" element={<EmployerLayout />} />
      <Route path="/*" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
