import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "../components/Link";

export function Cart() {
  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        borderRadius: 1,
        // flexDirection: "column",
        backgroundColor: (theme) => theme.palette.background.paper, //justifyContent: "center",
        //alignItems: "center",
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
  );
}
