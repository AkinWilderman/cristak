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
});

export default function SimpleProduct() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/image/bluetooth.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <CardContent>
          <Typography gutterBottom color="textSecondary" variant="h5" component="p">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ₦ 10,000
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
}
