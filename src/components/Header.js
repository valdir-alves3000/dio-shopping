import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

import Cart from "./Cart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Dio Shopping
          </Typography>
          <Link href="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/contato">
            <Button color="inherit">Contato</Button>
          </Link>
          <Cart />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
