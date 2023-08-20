import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUserPage from "../CreateUser/CreateUser";
import NotFound from "../NotFound/NotFound";
import HomePage from "../Home/Home";
import ModifyUserPage from "../ModifyUser/ModifyUser";
import ListUsersPage from "../ListUsers/ListUsers";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<ListUsersPage />} />
        <Route path="/users/create" element={<CreateUserPage />} />
        <Route path="/users/:userId" element={<ModifyUserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
