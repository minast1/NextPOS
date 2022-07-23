import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ flexGrow: 1 }}></Box>
      {children}
    </Container>
  );
}
