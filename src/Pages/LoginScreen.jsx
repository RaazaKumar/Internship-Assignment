import React from "react";
import { Link } from "react-router-dom";

function LoginScreen() {
  return (
    <>
      <div className="w-[350px] flex flex-col m-auto h-[100vh]  border ">
        <div className="m-3">
          <div>
            <h1 className="font-bold text-2xl mt-4 w-[50%]">
              <span>Signin to your PopX account</span>
            </h1>
          </div>
          <div className="p-1 w-[80%]">
            <span className="mb-2 opacity-60 text-sm">
              Lorem ipsum dolor sit amet,
            </span>
            <br></br>
            <span className="mb-2 opacity-60 text-sm">
              consectetur adipisicing elit.
            </span>
          </div>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Email Address</legend>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
              required
            />
          </fieldset>

          {/* Password Field */}
          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Password</legend>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
              required
            />
          </fieldset>

          <div className="bg-gray-400 rounded-l text-white m-2 p-1.5 text-center ">
           <Link to="/Profile"> Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
