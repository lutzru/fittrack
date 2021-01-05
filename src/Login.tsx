import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";
import React, { useRef, useState } from "react";

import useAuth from "./AuthContext";

export interface LoginProps {}

const Login = (props: LoginProps): JSX.Element => {
  const { login } = useAuth();

  let [email, setEmail] = useState("");
  let [pw1, setPw1] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Signup go  -" + email + "-" + pw1 + "-");

    console.log("Signup call");

    try {
      let r = await login(email, pw1);
      console.log("Erfolgreich!: ", r);
      alert("Login erfolgreich!");
    } catch (e) {
      alert("Fehler11:" + e);
    }
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
