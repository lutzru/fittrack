import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import * as React from "react";
import { EntryType } from "./Decoder";

export interface LoginDialogProps {
  logCode: string;
  onEnter: () => void;
  onLogCodeChange: (userName: string) => void;
  logItem: EntryType;
}

const NewLogEntry = (props: LoginDialogProps): JSX.Element => {
  const enterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //alert(e.key+' pressed')
      props.onEnter();
    }
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    props.onEnter();
  };

  const onLocalLogCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onLogCodeChange(e.target.value);
  };

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <TextField
          id="standard-basic"
          label="Logcode"
          value={props.logCode}
          onChange={onLocalLogCodeChange}
          onKeyPress={enterHandler}
        />
      </Grid>

      <Grid item>
        {props.logItem.desc} - {props.logItem.count} {props.logItem.unit} -{" "}
        {props.logItem.kcal} kcal - {props.logItem.totalKcal} Σ kcal
      </Grid>

      <Grid item>
        <Button variant="contained" color="primary" onClick={onClick}>
          log
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewLogEntry;
