import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Current from "./pages/current";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MenuButton from "./components/navigation/menuButton";
import History from "./pages/history";
import Sidenav from "./components/navigation/sideNav";

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Router>
          <Routes>
            <Route path="/current" element={<Current />} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Navigate to="/current" replace />} />
          </Routes>
        </Router>
      </LocalizationProvider>
    </div>
  );
}

export default App;
