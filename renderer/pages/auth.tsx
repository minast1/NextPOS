import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import SignIn from "../components/SignIn";
import { Fetcher } from "swr";
import { User } from "@prisma/client";

export default function AuthPage() {
  React.useEffect(() => {
    const createDefaultAdmin = async () => {
      const res = await fetch("http://localhost:8888/api/default", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "admin@gmail.com", password: "admin" }),
      });
    };
    createDefaultAdmin();
  }, []);

  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container>
        <Grid item xs={7}>
          <Box
            sx={{
              backgroundImage: "url('/images/bg4.jpg')",
              width: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ height: "90vh" }}
          >
            <SignIn />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
