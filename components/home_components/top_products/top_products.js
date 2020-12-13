import React from 'react';
import '../../../styles/top.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1280,
    marginLeft: 20,
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
            <Grid container spacing={3}>
              <Grid item xs={2}><h1> 1 </h1></Grid>
              <Grid item xs={2}><h1> 1 </h1></Grid>
              <Grid item xs={2}><h1> 1 </h1></Grid>
              <Grid item xs={2}><h1> 1 </h1></Grid>
              <Grid item xs={2}><h1> 1 </h1></Grid>
              <Grid item xs={2}><h1> 1 </h1></Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}
