import React, { useState, useEffect } from "react";
import AddUser from "./AddUser";

import axios from "axios";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

import { Wrapper, StyledAvatar } from "./ContactList.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export default function ContactList() {
  const classes = useStyles();

  const [users, setUsers] = React.useState([]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:7000/users/")
      .then((response) => setUsers(response.data));
  }, []);

  return (
    <Wrapper>
      {users.map((user) => (
        <div>
          <StyledAvatar
            src={user.image}
            className={classes.large}
          ></StyledAvatar>

          <List>
            <ListItem key={user.name} onClick={() => setDrawerOpen(true)}>
              {user.email}
            </ListItem>
          </List>
        </div>
      ))}

      <IconButton>
        <PersonAddIcon onClick={() => setDrawerOpen(true)}></PersonAddIcon>
      </IconButton>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <AddUser></AddUser>
      </Drawer>
    </Wrapper>
  );
}
