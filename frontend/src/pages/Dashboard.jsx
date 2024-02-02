import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  }, []);
  return (
    <div>
      <AppBar />
      <Balance value={balance.toFixed(2)} />
      <Users />
    </div>
  );
};

export default Dashboard;
