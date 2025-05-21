import React from "react";
import { Link } from "react-router-dom";
function SignupScreen() {
  return (
    <>
      <div className="w-[350px] flex flex-col m-auto h-[100vh]  border justify-between">
        <div className="m-2 p-2">
          <div>
            <h1 className="font-bold text-2xl m-3 w-[50%]">
              <span>Create your PopX account</span>
            </h1>
          </div>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Full Name</legend>
            <input
              type="text"
              placeholder="Enter your good Name"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </fieldset>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Phone number</legend>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </fieldset>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Email Address</legend>
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </fieldset>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Password</legend>
            <input
              type="password"
              placeholder="Set your Password"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </fieldset>

          <fieldset className="text-xs border border-gray-300 rounded-md px-4 pt-1 pb-2">
            <legend className="text-sm text-purple-600 ">Company name</legend>
            <input
              type="number"
              placeholder="Enter your company name"
              className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
            />
          </fieldset>

          <div className="my-2">Are you an Agency?*</div>
          <div className="w-[50%] flex justify-between">
            <div>
              <input type="radio" name="agency" value="yes" />
              <span> Yes</span>
            </div>
            <div>
              <input type="radio" name="agency" value="No" />
              <span> No</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-700 rounded-l text-white m-6 p-1.5 text-center ">
          <Link to="/Profile"> Create Account</Link>
        </div>
      </div>
    </>
  );
}

export default SignupScreen;
