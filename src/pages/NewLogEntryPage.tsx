import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";

import * as React from "react";
import { EntryType } from "../components/Decoder";
import NewLogEntry from "../components/NewLogEntry";

export interface NewLogEntryPageProps {
  logCode: string;
  onEnter: () => void;
  onLogCodeChange: (userName: string) => void;
  logItem: EntryType;
}

const NewLogEntryPage = (props: NewLogEntryPageProps): JSX.Element => {
  return (
    <Box padding={3}>
      <Paper elevation={3}>
        <Box padding={3}>
          <Grid container alignItems="center" direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h4">New Log Entry:</Typography>
            </Grid>

            <Grid item>
              <NewLogEntry
                logCode={props.logCode}
                onLogCodeChange={props.onLogCodeChange}
                onEnter={props.onEnter}
                logItem={props.logItem}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default NewLogEntryPage;
