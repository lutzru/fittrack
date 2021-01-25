import React, { useRef, useState, Dispatch } from "react";
import { useDispatch } from "react-redux";

import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";

import useAuth from "./AuthContext";

export interface LoginProps {}

const Login = (props: LoginProps): JSX.Element => {
  const { login } = useAuth();

  let [email, setEmail] = useState("");
  let [pw1, setPw1] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Login go  -" + email + "-" + pw1 + "-");

    //login(email, pw1);
  }

  return (
    <div>
      Login: {email} - {pw1}
      <br /> <br />
      <TextField
        id="username"
        label="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={pw1}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPw1(e.target.value);
        }}
      />
      <br /> <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        login
      </Button>
    </div>
  );
};

export default Login;
