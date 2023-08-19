import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import CreateUserPage from "../createUser/CreateUserPage";
import NotFound from "../notFound/NotFound";
import HomePage from "../home/Home";

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
