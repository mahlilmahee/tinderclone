import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const Authmodal = ({ setModal, isSignup, setIsSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handclick = () => {
    setModal(false);
    console.log("hello ami ");
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup && password !== confirmPassword) {
        setError("Please match both of the password");
        return;
      }

      const response = await axios.post(
        `http://localhost:8000/${isSignup ? "signup" : "login"}`,
        { email, password }
      );
      const success = response.status === 201;

      if (success && isSignup) {
        console.log(response, "dekho to ki dise");
        setCookie("email", response.data.email);
        setCookie("userId", response.data.userId);
        setCookie("token", response.data.token);
        navigate("/onboarding");
      }
      if (success && !isSignup) {
        setCookie("email", response.data.email);
        setCookie("userId", response.data.userId);
        setCookie("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="authmodal"
      style={{
        backgroundColor: "white",
        width: "350px",
        height: "auto",
        margin: "20px auto",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "15px",
      }}
    >
      <button onClick={handclick} className="auth-button">
        X
      </button>
      Auth Modal
      <h2>{isSignup ? "Create Account" : "Log in"}</h2>
      <p>
        By Clicking this you are being agreed with the terms and conditions of
        our company
      </p>
      <form onSubmit={onSubmit} className="formcreate">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignup && (
          <input
            type="password"
            id="ConfirmPassword"
            name="ConfirmPassword"
            placeholder="ConfirmPassword"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <input type="submit" />
      </form>
      <hr />
      <h2>Get Our App</h2>
    </div>
  );
};

export default Authmodal;
