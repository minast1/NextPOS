import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../components/Link";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Home - Nextron (with-typescript-material-ui)
        </Typography>
        <img src="/images/logo.png" />
        <Link href="/about" color="secondary">
          To the about page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
