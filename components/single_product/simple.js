import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  priceTag: {
    color: '#000000'
  },
});

export default function SimpleProduct(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/image/watch.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <CardContent>
          <Typography gutterBottom color="textSecondary" variant="body1" component="p" display="inline">
            Best Sandisk 32GB flash usb drive
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.priceTag}>
            ₦ 10,000
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className="mainPrice">
            ₦ 10,000
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
}
