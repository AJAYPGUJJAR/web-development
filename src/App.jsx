import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/Loader";
import "./styles/app.scss"

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Product"));
const Transactions = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customer"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/* Charts */}


          {/* Apps */}

          
        </Routes>
      </Suspense>
    </Router>
  );
}
