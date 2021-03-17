import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import { Grid, TextField, Button } from "@material-ui/core";
import { StyledButton } from "./Login.styles";

const Login = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <TextField
        size="large"
        variant="outlined"
        label="Email"
        fullWidth
        style={{ marginBottom: "2em" }}
      />
      <StyledButton
        size="large"
        varient="contained"
        color="primary"
        style={{ margin: "0.3em" }}
        onClick={() => setOpen(true)}
      >
        Add Image
      </StyledButton>

      <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          console.log("Files:", files);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
      <StyledButton
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: "0.3em" }}
      >
        Signup
      </StyledButton>
      <StyledButton
        size="large"
        variant="contained"
        color="primary"
        style={{ margin: "0.3em" }}
      >
        Change Info
      </StyledButton>
    </Grid>
  );
};

export default Login;
