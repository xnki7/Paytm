import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

const SignIn = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col text-center justify-center bg-white h-max p-2 px-4 rounded-lg">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox label={"Email"} placeholder={"ankit@gmail.com"} />
        <InputBox label={"Password"} placeholder={"123456"} />
        <Button label={"Sign In"} />
        <BottomWarning
          label={"Don't have an account?"}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
};

export default SignIn;
