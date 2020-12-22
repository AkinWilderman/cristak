import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 60,
    height: 420,
    width: 1200,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
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
        <Grid item xs={7}>
          <div className={classes.div}>
            <Image src="/image/nails.png" width={700} height={250} />
            <Image src="/image/year.png" width={700} height={150} />
          </div>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><Image src="/image/jumia.gif" width={250} height={220} /></Paper>
          <Paper className={classes.paper}><Image src="/image/jumsa.gif" width={250} height={220} /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
