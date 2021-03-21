import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { StyledForm } from "./AddUser.styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddUser() {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const onSubmit = (data) => console.log(data);

  const onSubmit = async () => {
    const user = { name, email };

    await axios
      .post("http://127.0.0.1:7000/users/", user)
      .then((data) => console.log(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        ref={register}
        onChange={(e) => setName(e.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        ref={register}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <input type="submit" />
    </StyledForm>
  );
}
