import React from "react";
import { Link } from "react-router-dom";
// import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";

function LandingScreen() {
  return (
    <>
      <div className="w-[350px] flex flex-col justify-between m-auto h-[100vh]  border ">
        <div className="h-[60vh] p-5 "></div>
        <div className=" p-5 ">
          <div>
            <h1 className="font-medium text-2xl opacity-75 mt-4 w-[80%]">
              <span>Welcome to PopX</span>
            </h1>
          </div>
          <div className="p-1 w-[80%]">
            <p className="mb-2 opacity-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-purple-600 rounded-l text-white m-2 p-1.5 text-center ">
            <Link to="SignupScreen"> Create Account</Link>
          </div>
          <div className="bg-purple-400 rounded-l m-2 p-1.5 text-center ">
            <Link to="/LoginScreen"> Already Registered? Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingScreen;
