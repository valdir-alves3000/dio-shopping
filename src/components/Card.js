/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core/";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "./store/actions/cart";
import { relative } from "path";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    width: 250,
    height: 350,
    background: "#232323",
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
      background: "#03a9f499",
      display: "inline-block",
      borderRadius: "50%",
      transition: "0.5s",
    },
    "&:hover::before": {
      left: "-10%",
      top: "-90%",
      width: 600,
      height: 500,
    },
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: 10,
  },
  price: {
    width: "100%",
    textAlign: "center",
    color: "#ddd",
  },
  button: {
    width: "100%",
    background: "#03a9f483",
    borderRadius: 4,
    marginTop: 10,
    fontWeight: 500,
    color: "#fff",
  },
}));

const Card = ({ product, children }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    // <Grid item xs={3}>
    //   <Paper className={classes.paper}>
    //     <Grid container direction="column">
    //       <Grid item>

    //       </Grid>

    //
    //     </Grid>
    //   </Paper>
    // </Grid>

    <div className={classes.card}>
      <div className={classes.imgBox}>
        <img width={150} src={product.image} alt={product.name_product} />
      </div>
      <div className={classes.contentbox}>
        <Typography className={classes.title} variant="h6">
          {children}
        </Typography>

        <Typography className={classes.price} variant="subtitle1">
          R$ {product.price.toFixed(2)}
        </Typography>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => dispatch(cartActions.Add(cart, product))}
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default Card;
