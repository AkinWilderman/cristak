import React from 'react';
import '../../../styles/top.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1080,
    marginLeft: 100,
    marginTop: 50,
  },
}));

export default function Top() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <div>
          <div className="main">
            <h3>
              Top Products
            </h3>
          </div>
          <div>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper className={classes.paper}>Hello, Akin Wilderman</Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}
