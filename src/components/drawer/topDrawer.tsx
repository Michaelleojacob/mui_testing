import { useState, Fragment } from "react";
import { Box, SwipeableDrawer, Button, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MyDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      open ? handleOpen() : handleClose();
    };

  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div>project1</div>
      <Divider />
      <div>project2</div>
      <div>+</div>
    </Box>
  );

  return (
    <div>
      <Fragment key={"top"}>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"top"}
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};

export default MyDrawer;
