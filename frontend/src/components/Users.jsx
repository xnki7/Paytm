import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className="mx-8">
      <div className="font-bold mt-4 text-xl">Users</div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search Users..."
          className="border w-full px-2 py-1 rounded border-slate-200"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>
      <div>
        {users.map((user) => {
          return <User user={user} />;
        })}
      </div>
    </div>
  );
};

const User = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="w-11 h-11 flex justify-center items-center bg-blue-300 rounded-full">
          {user.firstName[0]}
        </div>
        <div className="ml-4">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div>
        <Button
          label={"Send Money"}
          onClick={(e) => {
            navigate(
              "/send?id=" +
                user._id +
                "&name=" +
                user.firstName +
                "&lname=" +
                user.lastName
            );
          }}
        />
      </div>
    </div>
  );
};

export default Users;
