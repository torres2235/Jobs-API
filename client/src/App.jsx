//import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import LandingPage from "./pages/LandingPage";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
