import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";
import React, { useRef, useState } from "react";
import decodeLogCode, { EntryType, CodeEntryType } from "./Decoder";

import useAuth from "../AuthContext";

export interface SignupProps {}

const Signup = (props: SignupProps): JSX.Element => {
  
  const { signup } = useAuth();

  let [email, setEmail] = useState("");
  let [pw1, setPw1] = useState("");
  let [pw2, setPw2] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Signup go  -" + email + "-" + pw1 + "-" + pw2 + "-");
    if (pw1 === pw2) {
      console.log("Signup call");

      try {
        await signup(email, pw2);
        alert("Registrierung erfolgreich!");
      } catch (e) {
        alert("Fehler11:" + e);
      }
    }
  }

  return (
    <div>
      Signup: {email} - {pw1} - {pw2}
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
      <TextField
        id="password"
        label="Password Confirmation"
        type="password"
        value={pw2}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setPw2(e.target.value);
        }}
      />
      <br /> <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        signup
      </Button>
    </div>
  );
};

export default Signup;
