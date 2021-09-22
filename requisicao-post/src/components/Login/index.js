import "./style.css";
import { useState } from "react";
import axios from "axios";

const Login = ({ setResponse, setMensagem }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (e) => {
    setUsername(e.target.value);
  };
  
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const handleButton = (e) => {
    e.preventDefault();
    const formData = { username: username, password: password };
    axios
    .post("https://kenzieshop.herokuapp.com/sessions/", formData)
    .then(() => setResponse(true))
    .catch(() => setResponse(false))
    setMensagem(true)
  };

  return (
    <form className="form">
      <input
        className="form__input"
        type="username"
        placeholder="username..."
        onChange={handleEmail}
      ></input>
      <input
        className="form__input"
        placeholder="password..."
        type="password"
        onChange={handlePassword}
      ></input>
      <button className="form__button" onClick={handleButton}>
        Login
      </button>
    </form>
  );
};

export default Login;
