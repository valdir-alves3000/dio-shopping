import {
  Button,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core/";
import { useEffect, useState } from "react";
import useStyles from "../styles/Contato.style";

const Contatos = () => {
  const url = "http://localhost:5000/message";
  const [message, setMessage] = useState([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [validator, setValidator] = useState(false);
  const [render, setRender] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMessage(data);
  }, [render]);

  const sendMessage = () => {
    setValidator(false);
    if (author.length <= 0 || content.length <= 0) {
      return setValidator(!validator);
    }
    const bodyForm = {
      email: author,
      message: content,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyForm),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setRender(true);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });

    setAuthor("");
    setContent("");
  };

  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.form}>
            <Typography style={{ textAlign: "center" }} color="#414240">
              Digite sua mensagem
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              autoFocus
              id="name"
              label="Name"
              value={author}
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              autoFocus
              id="message"
              label="Message"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
              fullWidth
            />
          </div>
        </div>

        {validator && (
          <div
            className="alert alert-warning alert-dismissible fade show mt-2"
            role="alert"
          >
            <strong style={{ color: "#f33" }}>
              Por favor preencha todos os campos!
            </strong>
          </div>
        )}

        {success && (
          <div
            className="alert alert-success alert-dismissible fade show mt-2"
            role="alert"
          >
            <strong>Mensagem foi enviada</strong>
          </div>
        )}

        <Button
          onClick={sendMessage}
          className={classes.submit}
          variant="contained"
          color="primary"
        >
          Sent
        </Button>
      </Container>
      <Container>
        <Grid container direction="row" xs={12}>
          {message.map((content) => {
            return (
              <div className={classes.card} key={content.id}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {content.email}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="p"
                    className={classes.text}
                  >
                    {content.message}
                  </Typography>
                  <Typography color="textSecondary">
                    <small className="text-muted">{content.created_at}</small>
                  </Typography>
                </CardContent>
              </div>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Contatos;
