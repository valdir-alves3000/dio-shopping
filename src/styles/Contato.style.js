import { makeStyles } from "@material-ui/core";

const ContatoStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
    marginBottom: 35,
  },
  card: {
    display: "flex",
    alignItems: "center",
    width: 275,
    margin: 12,
    borderRadius: 13,
    boxShadow: "2px 2px 5px #ccc",
    minHeight: 200,
  },

  title: {
    fontSize: 14,
    marginBottom: 12,
    textAlign: "justify",
  },
  text: {
    marginBottom: 12,
    color: "#414240",
  },
}));

export default ContatoStyle;
