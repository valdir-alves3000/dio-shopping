import { Grid, List, Paper, Typography } from "@material-ui/core/";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import Item from "../components/Item";
import useStyles from "../styles/Home.style";

const HomePage = () => {
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  const categorys = products.map((category) => {
    const container = {};
    container["id"] = category.id_categorys;
    container["name"] = category.name_categorys;
    return container;
  });

  const category = categorys
    .map(JSON.stringify)
    .filter(function (item, index, arr) {
      return arr.indexOf(item, index + 1) === -1;
    })
    .map(JSON.parse);

  const arrayCategory = categorys.map((category) => category.name);
  let count = {};

  for (let i = 0; i < arrayCategory.length; i++) {
    {
      let key = arrayCategory[i];
      count[key] = count[key] ? count[key] + 1 : 1;
    }
  }

  return (
    <>
      <Grid container spacing={12} className={classes.root}>
        <Grid item xs={3} style={{ marginBottom: "20px" }}>
          <Paper className={classes.paper}>
            <Typography variant="h5">Categorias</Typography>
            <List>
              {category.map((category) => {
                return (
                  <Item
                    key={category.id}
                    name={category.name}
                    details={count[category.name]}
                  />
                );
              })}
            </List>
          </Paper>
        </Grid>
        <Grid container xs={9} spacing={3}>
          {products.map((item) => {
            return (
              <Card key={item.id_product} product={item}>
                {item.name_product}
              </Card>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
