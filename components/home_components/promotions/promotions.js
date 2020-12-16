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
        <Grid item xs={6}>
          <Image src="/image/jumia.gif" width={700} height={450} />
        </Grid>
        <Grid item xs>
          <div>
            <div>
              <Image src="/image/watch.jpg" height={200} width={300} />
            </div>
            <div className={classes.smallAds}>
              <Image src="/image/flash.jpg" height={200} width={300} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
