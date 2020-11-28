import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/Auth/Action";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 4,
  },
  manager: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user_data);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <Typography className={classes.title}>DASHBOARD</Typography>
            <Typography className={classes.manager}>
              {user.manager_name}
            </Typography>
            <Button style={{ color: "white" }} onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default Navbar;
