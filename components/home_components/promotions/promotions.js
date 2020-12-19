import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 60,
    height: 500,
    width: 1200
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
  },
  div: {
    height: 500,
  },
  smallAds: {
    marginTop: 19,
  },
}));

export default function Promotions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.div}>
            <Image src="/image/nails.png" width={600} height={245} />
            <Image src="/image/year.png" width={600} height={245} />
          </div>
        </Grid>
        <Grid item xs>
          <div className={classes.div}>
            <div>
              <Image src="/image/watch.jpg" height={245} width={300} />
            </div>
            <div className={classes.smallAds}>
              <Image src="/image/jumsa.gif" height={245} width={300} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
