import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { z } from "zod";
import { useZorm } from "react-zorm";
import {
  signIn,
  SignInAuthorizationParams,
  SignInResponse,
} from "next-auth/react";
import { useRouter } from "next/router";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, "The email field is required")
    .email("The provided field is not a valid email address"),
  password: z.string().min(1, "The password field is required"),
});

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = React.useState<string | undefined>(null);
  const zo = useZorm("signIn", FormSchema, {
    async onValidSubmit(e) {
      e.preventDefault();
      //console.log(`Form ok! ${JSON.stringify(e.data)}`);
      const { email, password } = e.data;
      const res: SignInResponse = await signIn("credentials", {
        email,
        password,
        callbackUrl: "http://localhost:8888/home",
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
      }
      if (res?.ok) {
        router.push(res.url);
      }
    },
  });

  return (
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
          Sign in
        </Typography>
        <Box component="form" ref={zo.ref} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            error={!!zo.errors.email("errored")}
            fullWidth
            id="email"
            label="Email Address"
            name={zo.fields.email()}
            autoComplete="email"
            helperText={
              zo.errors.email("errored") && zo.errors.email((e) => e.message)
            }
            autoFocus
          />
          <TextField
            margin="normal"
            error={!!zo.errors.password("errored")}
            helperText={
              zo.errors.password("errored") &&
              zo.errors.password((e) => e.message)
            }
            fullWidth
            name={zo.fields.password()}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
