import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 60,
    height: 600,
    width: 1200
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
  },
  smallAds: {
    marginTop: 10,
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
        <Grid item xs={7}>
          <div>
            <Image src="/image/nails.png" width={700} height={245} />
            <Image src="/image/year.png" width={700} height={245} />
          </div>
        </Grid>
        <Grid item xs>
          <div>
            <div>
              <Image src="/image/watch.jpg" height={250} width={250} />
            </div>
            <div className={classes.smallAds}>
              <Image src="/image/jumsa.gif" height={250} width={250} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
