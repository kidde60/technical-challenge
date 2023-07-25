import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      genToken();
    }
  };
  console.log("name: ", userName);
  console.log("password: ", password);

  const genToken = async () => {
    const url = "https://bookstore.toolsqa.com/Account/v1/GenerateToken";
    const options = {
      userName: userName,
      password: password,
    };
    const response = await axios.post(url, options).catch((err) => {
      console.log("Error :", err);
    });
    // console.log(response);
    if (response.data.status === "Success") {
      login();
      navigate("/home");
    }
  };
  const login = async () => {
    const url = "https://bookstore.toolsqa.com/Account/v1/Authorized";
    const options = {
      userName: userName,
      password: password,
    };
    const result = await axios
      .post(url, options)
      .catch((error) => console.log("error: ", error));
    console.log(result);
  };
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="container m-8 gap-4 flex flex-col  p-10"
      >
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="User Name"
          className="bg-[#e5e7eb] py-2 px-4 my-3 text-base border-solid border-2 border-gray-400"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="bg-[#e5e7eb] py-2 px-4 text-base border-solid border-2 border-gray-400"
        />
        <div className="flex gap-20 mx-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-[#61affe] px-4 py-2 rounded-full max-w-max"
          >
            Login
          </button>
          <Link to={"/"} className="text-blue-500">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
