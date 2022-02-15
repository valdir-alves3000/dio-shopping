import { makeStyles } from "@material-ui/core";

const CardStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },

  title: {
    top: 50,
    color: "#fff",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 10,
    transition: "0.6s",
  },
  price: {
    top: 150,
    width: "100%",
    textAlign: "center",
    color: "#ddd",
    transition: "0.8s",
  },
  button: {
    top: 150,
    width: "100%",
    background: "#03a9f483",
    borderRadius: 4,
    marginTop: 10,
    fontWeight: 500,
    color: "#fff",
    transition: "1s",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: 250,
    height: 350,
    background: "#333",
    borderRadius: 20,
    overflow: "hidden",
    margin: 7,
    "&::before": {
      content: "''",
      top: "-20%",
      left: "40%",
      position: "absolute",
      width: 300,
      height: 280,
      background: "#03a9f455",
      display: "inline-block",
      borderRadius: "50%",
      transition: "0.5s",
    },
    "& img": {
      top: 35,
      transition: "0.4s",
    },
    "&:hover::before": {
      left: "-10%",
      top: "-90%",
      width: 600,
      height: 500,
    },
    "&:hover #price": {
      transform: "translateY(-150px)",
    },

    "&:hover #button": {
      transform: "translateY(-150px)",
    },
    "&:hover #title, &:hover img": {
      transform: "translateY(-50px)",
    },
  },
}));

export default CardStyle;
