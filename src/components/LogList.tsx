import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { format } from "date-fns";

import * as React from "react";
import decodeLogCode, { EntryType, CodeEntryType } from "./Decoder";

export interface LogListProps {
  logBook: CodeEntryType[];
}

const LogList = (props: LogListProps): JSX.Element => {
  let sumToday = 0;
  const today = new Date();
  const todayFormatted = format(today, "dd.MM.yyyy");

  const listItems = props.logBook.map((entry: CodeEntryType) => {
    let logItem: EntryType = decodeLogCode(entry.code);

    if (todayFormatted == entry.codedate) {
      sumToday = sumToday + logItem.totalKcal;
    }

    return (
      <Grid item>
        {entry.code} - {entry.codedate} - {entry.codetime} - {logItem.desc} -{" "}
        {logItem.count} {logItem.unit} -{logItem.kcal} kcal -{" "}
        {logItem.totalKcal} Σ kcal
      </Grid>
    );
  });

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>Summe Heute: {sumToday}</Grid>
      {listItems}
    </Grid>
  );
};

export default LogList;
