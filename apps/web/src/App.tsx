import React from "react";
import { Link } from "ui";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUserPage from "./pages/createUser/CreateUserPage";
import NotFound from "./pages/notFound/NotFound";
import HomePage from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/create" element={<CreateUserPage />} />
        <Route path="/user/:userId" element={<CreateUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
