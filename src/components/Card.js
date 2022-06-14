/* eslint-disable @next/next/no-img-element */
import { Button, Typography } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles/Card.style.js";
import cartActions from "./store/actions/cart";

const Card = ({ product, children }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.imgBox}>
        <img width={150} src={product.image} alt={product.name_product} />
      </div>
      <div className={classes.contentbox}>
        <Typography className={classes.title} variant="h6" id="title">
          {children}
        </Typography>

        <Typography className={classes.price} variant="subtitle1" id="price">
          R$ {product.price.toFixed(2)}
        </Typography>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => dispatch(cartActions.Add(cart, product))}
          id="button"
        >
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default Card;
