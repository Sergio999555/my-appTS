import React, { FC, useState, useEffect } from "react";
import UserItem from "./UserItem";
import { IUser } from "../types/types";
import List from "./List";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUSers();
  }, []);

  async function fetchUSers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => navigate("/users/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UsersPage;
