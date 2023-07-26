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
      <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-10 rounded-lg shadow-xl transform transition-all w-2/3 max-w-md hover:scale-105">
            <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                  placeholder="User Name"
                  className="block w-full p-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="block w-full p-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
            <hr className="my-6 border-gray-300 w-full" />
            <div className="text-center">
              <Link
                to="/signup"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
