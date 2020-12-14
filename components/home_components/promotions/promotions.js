import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 100,
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
  mainGrid: {
    height: 500,
    width: 1080,
  }
}));

export default function Promotions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.mainGrid}>
        <Grid item xs>
          <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
        </Grid>
        <Grid item xs={6}>
          <Image src="/image/1_cristak.gif" width={900} height={637} />
        </Grid>
        <Grid item xs>
          <div>
            <div>
              <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
            </div>
            <div className={classes.smallAds}>
              <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
