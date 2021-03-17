import React from "react";
import Login from "./components/Login";
import { Grid, Avatar } from "@material-ui/core";
import { Wrapper } from "./App.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        style={{ minHeight: "100vh" }}
        spacing={5}
      >
        <Grid item>
          <Avatar
            alt="Cat"
            src="https://media.istockphoto.com/photos/european-shorthair-wearing-a-suit-beige-background-picture-id489543113?k=6&m=489543113&s=612x612&w=0&h=EiakKxqTM9FwxOkPNn3Ep_C_WaVbX-H0Nu_nsbHGcC0="
            className={classes.large}
          />
        </Grid>
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    </Wrapper>
  );
}
