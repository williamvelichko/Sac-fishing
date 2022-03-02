import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Main_container>
      <Form_container>
        <form onSubmit={submit}>
          <h2>Login</h2>
          <label>username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Login</button>
          <h5>
            Create New Account
            <Link to="/signup" className="link">
              (SignUp)
            </Link>
          </h5>
        </form>
      </Form_container>
    </Main_container>
  );
}

export default Login;

const Main_container = styled.div`
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmlzaGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");

  height: 100vh;
  background-size: cover;
  display: flex;
`;

const Form_container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    padding: 150px;
    color: white;
    font-family: Fira Sans;
    font-size: 1.3rem;
    input {
      padding: 6px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    button {
      padding: 4px;
      margin-top: 10px;
      background-color: silver;
      border: 1px solid silver;
      font-size: 1.2rem;
      font-weight: bold;
      color: black;
      transition: box-shadow 0.2s;
    }
    button:hover {
      box-shadow: 0px 0px 10px black;
    }
    .link {
      text-decoration: none;
      color: black;
    }
  }

  margin: auto;
  background-color: grey;
  opacity: 0.8;
  border: 1px solid grey;
  width: 50%;
`;
