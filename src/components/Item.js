import { ListItem, ListItemText } from "@material-ui/core/";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  text: {
    "& .MuiListItemText-secondary": {
      color: "#bbb",
      padding: 7,
    },
  },
}));

const Item = ({ name, details }) => {
  const classes = useStyles();
  return (
    <ListItem>
      <ListItemText
        primary={name}
        secondary={details}
        className={classes.text}
      />
    </ListItem>
  );
};

export default Item;
