import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import LayoutButton from "./LayoutButton";
import Link from "./Link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{ backgroundColor: "#212121", height: "100vh", pt: 1 }}
    >
      <Stack direction="row" sx={{ padding: 2 }} gap={2}>
        <LayoutButton name="products" startIcon={<QrCode2Icon />} />
        <LayoutButton name="categories" startIcon={<GridViewIcon />} />
        <LayoutButton name="reports" startIcon={<NoteAltIcon />} />
        <Box flexGrow={1} />
        <Button
          variant="contained"
          component={Link}
          href="home"
          sx={{ textTransform: "capitalize" }}
        >
          <SettingsIcon />
        </Button>
        <LayoutButton name="point of sale" startIcon={<ShoppingCartIcon />} />
        <LayoutButton name="users" startIcon={<PersonIcon />} />
        <Button
          variant="contained"
          disableElevation
          startIcon={<PersonIcon />}
          sx={{
            textTransform: "capitalize",
            backgroundColor: "lightgray",
            color: "gray",
            "&:hover": {
              backgroundColor: "lightgray",
            },
          }}
        >
          Administrator
        </Button>
        <Button
          component={Link}
          variant="contained"
          href="about"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "gray",
            "&:hover": {
              backgroundColor: "#ffc107",
            },
          }}
        >
          <ExitToAppIcon />
        </Button>
        <Button
          variant="contained"
          component={Link}
          href="auth"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          <PowerSettingsNewIcon />
        </Button>
      </Stack>

      <Box display="flex" alignItems="center" pt={1}></Box>
      <Box sx={{ flexGrow: 1 }}></Box>
      {children}
    </Container>
  );
}
