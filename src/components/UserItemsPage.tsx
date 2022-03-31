import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => navigate("/users", { replace: true })}>
        Back
      </button>
      <h3>User Page {user?.name}</h3>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  );
};

export default UserItemPage;
