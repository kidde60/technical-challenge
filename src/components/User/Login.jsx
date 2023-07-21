import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate) {
      genToken();
      //   axios
      //     .post("https://bookstore.toolsqa.com/Account/v1/User", options)
      //     .then((res) => {
      //       console.log(res.data);
      //     })
      //     .catch((error) => console.log(error));
      //   console.log("success");
      // } else {
      //   console.log("error");
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
    console.log(response.data.token);
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="User Name"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
        />
        <button type="submit" onSubmit={handleSubmit}>
          sign up
        </button>
      </form>
    </div>
  );
};

export default Login;
