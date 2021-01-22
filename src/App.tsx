import React, { useState } from "react";

import "./App.css";

import { Box, Button, Grid } from "@material-ui/core";
import NewLogEntry from "./components/NewLogEntry";
import NewLogEntryPage from "./pages/NewLogEntryPage";
import decodeLogCode, { EntryType, CodeEntryType } from "./components/Decoder";
import LogList from "./components/LogList";
import { format } from "date-fns";
import Signup from "./components/Signup";
import { firebaseAuth } from "./firebase";
import useAuth from "./AuthContext";
import Login from "./Login";
import { useSelector } from "react-redux";
import { IGeneralState } from "./reduxStuff";

function App(): JSX.Element {
  //
  // Hier wird der zentrale State gehalten
  // und alles wird im zentralen State gehalten!
  //
  const [logCode, setLogCode] = useState("");
  const logBookInitial: CodeEntryType[] = [];
  const [logBook, setLogBook] = useState(logBookInitial);
  const [currentItem, setCurrentItem] = useState({});

  let onEnter = () => {
    //alert("Enter pressed code is: " + logCode);

    const today = new Date();
    const formattedDate = format(today, "dd.MM.yyyy");
    const formattedTime = format(today, "HH:mm");

    let newCodeItem: CodeEntryType = {
      code: logCode,
      codedate: formattedDate,
      codetime: formattedTime,
    };

    // Append to Array, with Wrapper Function
    // https://medium.com/javascript-in-plain-english/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
    setLogBook((logBook) => [newCodeItem, ...logBook]);
  };

  let logItem: EntryType = decodeLogCode(logCode);
  if (logItem.desc !== "-") {
    // setCurrentItem(logItem);
  }

  // Firebase Login https://www.youtube.com/watch?v=PKwu15ldZ7k
  // UseContext: https://www.youtube.com/watch?v=5LrDIWkK_Bc

  //
  // so kann ich auf Werte aus dem Kontext zugreifen
  //
  let { theme } = useAuth();

  const message = useSelector<IGeneralState>((state) => state.message);

  return (
    <div className="App">
      <Box>
        <Grid container className="Cont-Root" spacing={5}>
          <Grid item xs={12}>
            Message:---{message}---
            <br />
            <br />
            <br />
            <Signup /> Theme aus context: --{theme}--
            <br />
            <br />
            <br />
            <Login />
          </Grid>

          <Grid item xs={12}>
            Fittraxx
          </Grid>

          <Grid item xs={12}>
            <NewLogEntryPage
              logCode={logCode}
              onLogCodeChange={setLogCode}
              onEnter={onEnter}
              logItem={logItem}
            />
          </Grid>

          <Grid item xs={12}>
            <LogList logBook={logBook} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
