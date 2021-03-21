import React, { useState } from "react";
import ContactList from "./components/ContactList";
import { Wrapper, StyledListIcon } from "./App.styles";
import Drawer from "@material-ui/core/Drawer";

export default function App() {
  const [listOpen, setListOpen] = React.useState(false);

  return (
    <Wrapper>
      <Drawer
        anchor="left"
        open={listOpen}
        onClose={() => setListOpen(false)}
      ></Drawer>
      <StyledListIcon
        style={{ fontSize: 40 }}
        onClick={() => setListOpen(true)}
      ></StyledListIcon>

      <ContactList></ContactList>
    </Wrapper>
  );
}
