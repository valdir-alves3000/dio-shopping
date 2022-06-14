import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../store/actions/cart";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let totalPrice = 0;

  for (let i = 0; i < cart.Cart.length; i++) {
    totalPrice += cart.Cart[i].price * cart.Cart[i].quantity;
  }

  if (cart.value > 0) {
    localStorage.setItem("dioshopping: cart", JSON.stringify(cart));
  }

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        type="button"
        className="btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#CartModal"
      >
        <Box>
          <ShoppingCartIcon style={{ color: "#fff" }} />
        </Box>
        <Box style={{ color: "#fff", paddingLeft: 7 }}>{cart.value}</Box>
      </Button>

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          style={{
            width: 600,
            marginTop: 100,
            marginLeft: "auto",
            marginRight: 50,
          }}
        >
          <Box className="modal-content">
            <Grid container direction="column" alignItems="flex-end">
              <Typography style={{ color: "#fff" }} id="CartModalLabel">
                Meu Carrinho
              </Typography>
              <Button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <CloseIcon style={{ color: "#fff" }} />
              </Button>
            </Grid>

            <Box className="modal-body table-responsive">
              <Paper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell style={{ textAlign: "center", width: 100 }}>
                          Produto
                        </TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          Qtd
                        </TableCell>
                        <TableCell>Preço</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.Cart.map((item) => {
                        return (
                          <TableRow key={item.id}>
                            <TableCell>
                              <Button
                                onClick={() =>
                                  dispatch(cartActions.DeleteItem(cart, item))
                                }
                                className="badge bg-danger"
                              >
                                <CloseIcon style={{ color: "#f25" }} />
                              </Button>
                            </TableCell>
                            <TableCell
                              style={{ width: 100, alignItems: "center" }}
                            >
                              <img
                                className="img-fluid img-thumbnail"
                                src={item.image}
                                alt={item.Name}
                                width="50px"
                              />
                            </TableCell>
                            <TableCell style={{ textAlign: "center" }}>
                              <span className="badge badge-pill bg-warning">
                                {item.quantity}
                              </span>
                            </TableCell>
                            <TableCell>R$ {item.price.toFixed(2)}</TableCell>
                            <TableCell>
                              <Button
                                onClick={() =>
                                  dispatch(cartActions.AddItem(cart, item))
                                }
                                className="badge badge-pill bg-primary"
                              >
                                <i className="fas fa-plus"></i>
                              </Button>
                            </TableCell>
                            <TableCell>
                              <Button
                                onClick={() =>
                                  dispatch(cartActions.RemoveItem(cart, item))
                                }
                                className="badge badge-pill bg-danger"
                              >
                                <i className="fas fa-minus"></i>
                              </Button>
                            </TableCell>
                            <TableCell>
                              R$ {(item.price * item.quantity).toFixed(2)}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell></TableCell>
                        <TableCell style={{ textAlign: "center" }}>
                          {cart.value} itens
                        </TableCell>
                        <TableCell colSpan={3}></TableCell>
                        <TableCell>R$ {totalPrice.toFixed(2)}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
