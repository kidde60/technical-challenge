import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      const options = {
        userName: userName,
        password: password,
      };
      axios
        .post("https://bookstore.toolsqa.com/Account/v1/User", options)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
      console.log("success");
    } else {
      console.log("error");
    }
  };
  console.log("name: ", userName);
  console.log("password: ", password);

  let isValid = true;
  const validate = () => {
    if (userName === "" || userName === null) {
      isValid = false;
      console.log("Please enter valid User Name");
    }
    if (password === "" || password === null) {
      isValid = false;
      console.log("Please enter valid password");
    }
  };

  return (
    <div className="form">
      <form
        onSubmit={handleSubmit}
        className="container m-8 gap-4 flex flex-col  p-10"
      >
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="User Name"
          className="bg-[#e5e7eb] py-2 px-4 text-base border-solid border-2 border-gray-400"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="bg-[#e5e7eb] py-2 px-4 my-3 text-base border-solid border-2 border-gray-400"
        />
        <div className="flex gap-20 mx-4">
          <button
            type="submit"
            className="bg-[#49cc90] px-4 py-2 rounded-full max-w-max"
            onSubmit={handleSubmit}
          >
            Register
          </button>
          {/* <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-[#61affe] px-4 py-2 rounded-full max-w-max"
          >
            Login
          </button> */}
          <Link to={"/Login"} className="text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
