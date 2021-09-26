import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "../Copyright/Copyright";
import {
  Alert,
  Avatar,
  Button,
  CssBaseline,
  Backdrop,
  Box,
  Grid,
  Link,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import axios, { AxiosError } from "axios";
import { useHistory } from "react-router";

const { useState } = React;

const theme = createTheme();

export default function SignUp() {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [firstNameValid, setFirstNameValid] = useState(false);
  const [lastNameValid, setLastNameValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [loading, setLoading] = useState(false);

  const [usernameError, setUsernameError] = useState(false);

  const isValid = async () => {
    setFirstNameValid(firstName.trim().length === 0);
    setLastNameValid(lastName.trim().length === 0);
    setUsernameValid(username.trim().length === 0);
    setPasswordValid(password.trim().length === 0);

    return !(
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      username.trim().length === 0 ||
      password.trim().length === 0
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (await isValid()) {
      setLoading(true);
      axios
        .post("http://localhost:8080/auth/signUp", {
          firstName,
          lastName,
          username,
          password,
        })
        .then((res) => {
          console.log(res);
          setLoading(false);
        })
        .catch((err: AxiosError): void => {
          if (err.response) {
            setUsernameError(true);
            setLoading(false);
            console.log(err.response.status);
          }
        });
    } else {
    }
  };

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {usernameError && (
                  <Grid item xs={12}>
                    <Alert severity="error">Username already Taken!</Alert>
                  </Grid>
                )}

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    error={firstNameValid}
                    helperText={firstNameValid && "First name is required"}
                    id="firstName"
                    label="First Name"
                    autoComplete="fname"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    error={lastNameValid}
                    helperText={lastNameValid && "Lase name is required"}
                    id="lastName"
                    label="Last Name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    error={usernameValid}
                    helperText={usernameValid && "Username is required"}
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    error={passwordValid}
                    helperText={passwordValid && "Password is required"}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required={true}
                        value="allowExtraEmails"
                        color="primary"
                      />
                    }
                    label="I agreed with Terms and Conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
