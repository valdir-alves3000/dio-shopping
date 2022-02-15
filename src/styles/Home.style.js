import { makeStyles } from "@material-ui/core";

const HomeStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "90px",
  },
  paper: {
    position: "fixed",
    paddingTop: 40,
    width: 320,
    height: "calc(100vh - 120px)",
    padding: theme.spacing(2),
    marginRight: theme.spacing(3),
    textAlign: "center",
    backgroundColor: "#333",
    borderRadius: 15,
    color: "#ebebeb",
  },
}));

export default HomeStyle;
