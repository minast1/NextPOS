import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function ProductCategories() {
  return (
    <Box
      gap={1}
      sx={{
        p: 3,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.background.paper, //justifyContent: "center",
        //alignItems: "center",
      }}
    >
      <Box display="flex">
        <TextField
          id="margin-none"
          sx={{ width: "40%", mr: 3 }}
          size="small"
          placeholder="Search product by name or sku.."
        />
        <Box display="flex" flexWrap="wrap" gap={1}>
          <Button variant="outlined" size="small">
            All
          </Button>
          <Button variant="outlined" size="small">
            Electronics
          </Button>
          <Button variant="outlined" size="small">
            Clothes
          </Button>
          <Button variant="outlined" size="small">
            Pleasure
          </Button>
          <Button variant="outlined" size="small">
            Costmetics
          </Button>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={3}>
        Products go here another product here
      </Box>
    </Box>
  );
}
