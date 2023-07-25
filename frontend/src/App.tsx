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
import Register from "./pages/register";
import ProtectedRoute from "./utils/protectedRoute";
import { checkAuthenticated } from "./api/authentication";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route
              path="/current"
              element={
                <ProtectedRoute>
                  <Current />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRoute>
                  <History />
                </ProtectedRoute>
              }
            />
            <Route
              path="/income"
              element={
                <ProtectedRoute>
                  <AllIncome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/expense"
              element={
                <ProtectedRoute>
                  <AllExpense />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/transactions/:id"
              element={
                <ProtectedRoute>
                  <TransactionDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/history/:year/:month"
              element={
                <ProtectedRoute>
                  <MonthDetails />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/current" replace />} />
          </Routes>
        </LocalizationProvider>
      </Router>
    </div>
  );
}

export default App;
