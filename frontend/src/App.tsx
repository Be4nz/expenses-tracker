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
import History from "./pages/history";
import NavigationBar from "./components/navigation/navigationBar";
import TransactionDetails from "./pages/transactionDetails";
import AllIncome from "./pages/allIncome";
import AllExpense from "./pages/allExpense";
import MonthDetails from "./pages/monthDetails";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/current" element={<Current />} />
            <Route path="/history" element={<History />} />
            <Route path="/income" element={<AllIncome />} />
            <Route path="/expense" element={<AllExpense />} />
            <Route path="/login" element={<Login />} />
            <Route path="/transactions/:id" element={<TransactionDetails />} />
            <Route path="/history/:year/:month" element={<MonthDetails />} />
            <Route path="*" element={<Navigate to="/current" replace />} />
          </Routes>
        </LocalizationProvider>
      </Router>
    </div>
  );
}

export default App;
