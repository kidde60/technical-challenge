import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
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
          // Create an object with the signup details
          const userDetails = {
            userID: res.data.userID,
            username: res.data.username,
          };

          // Save the signup details to localStorage
          localStorage.setItem("signupDetails", JSON.stringify(userDetails));
          navigate("/");
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
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-xl transform transition-all w-2/3 max-w-md hover:scale-105">
          <h1 className="text-2xl font-bold mb-8 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                placeholder="User Name"
                required
                className="block w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                required
                className="block w-full p-2 border rounded-lg"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Register
              </button>
            </div>
          </form>
          <hr className="my-6 border-gray-300 w-full" />
          <div className="text-center">
            <Link
              to="/"
              className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
