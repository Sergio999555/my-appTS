import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Пользователи</NavLink>
        <NavLink to="/todos" style={{ marginLeft: 16 }}>
          Сипсок дел
        </NavLink>
      </div>
      <Routes>
        <Route path={"/users"} element={<UsersPage />} />
        <Route path={"/todos"} element={<TodosPage />} />
        <Route path={"/users/:id"} element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
