import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { IconProps, SxProps } from "@mui/material";

type ButtonNames =
  | "products"
  | "categories"
  | "reports"
  | "point of sale"
  | "users";
type CustomButtonProps = {
  name?: ButtonNames;
  startIcon: React.ReactElement<IconProps>;
  sx?: SxProps;
};

export default function LayoutButton({
  name,
  startIcon,
  ...props
}: CustomButtonProps) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  /* const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };*/

  /*const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };*/

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        size="small"
        {...props}
        aria-label="split button"
      >
        <Button>{startIcon}</Button>
        <Button
          fullWidth
          sx={{
            textTransform: "capitalize",
          }}
        >
          {name}
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper></Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
