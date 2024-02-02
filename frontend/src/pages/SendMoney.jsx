import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const lastName = searchParams.get("lname");
  const [amount, setAmount] = useState(0);

  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white w-80 flex flex-col items-center shadow rounded">
        <Heading label={"Send Money"} />
        <div>
          <div className="flex mt-10 items-center justify-start mb-2">
            <div className="bg-green-500 text-xl rounded-full h-10 w-10 flex justify-center items-center text-white">
              {name[0]}
            </div>
            <div className="ml-2 font-semibold">
              {name} {lastName}
            </div>
          </div>
          <InputBox
            label={"Amount (in ₹)"}
            placeholder={"Enter Amount"}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button
            className="bg-green-500 w-full rounded mt-3 mb-6 py-1 text-white text-sm font-medium ring-offset-black"
            onClick={() => {
              axios
                .post(
                  "http://localhost:3000/api/v1/account/transfer",
                  {
                    to: id,
                    amount: amount,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                )
                .then((res) => {
                  console.log("YOYO TRANSFERRED");
                });
            }}
          >
            Initiate Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
