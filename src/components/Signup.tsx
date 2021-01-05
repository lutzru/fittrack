import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { format } from "date-fns";
import React, { useRef } from "react";
import decodeLogCode, { EntryType, CodeEntryType } from "./Decoder";

import useAuth from "../AuthContext";

export interface SignupProps {}

const Signup = (props: SignupProps): JSX.Element => {
  //const { signup } = useAuth();

  const emailRef = React.useRef<HTMLDivElement>(null);
  const passwordRef = React.useRef<HTMLDivElement>(null);
  const passwordConfirmRef = React.useRef<HTMLDivElement>(null);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (passwordRef.current !== null && passwordConfirmRef.current !== null) {
      if (
        passwordRef.current.nodeValue === passwordConfirmRef.current.nodeValue
      ) {
        //signup(emailRef.current, passwordRef.current);
        //signup("test-email", "test-password");
      }
    }
  }

  return (
    <div>
      Signup:
      <br /> <br />
      <TextField id="username" label="Email" ref={emailRef} />
      <br /> <br />
      <TextField
        id="password"
        label="Password"
        ref={passwordRef}
        type="password"
      />
      <br /> <br />
      <TextField
        id="password"
        label="Password Confirmation"
        ref={passwordConfirmRef}
        type="password"
      />
      <br /> <br />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        signup
      </Button>
    </div>
  );
};

export default Signup;
