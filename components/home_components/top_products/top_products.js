import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styles from '../../../styles/top.module.css';
import SimpleProduct from '../../single_product/simple';
import data from '../../../data/products.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1200,
    marginLeft: 60,
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  grid: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  seeMore: {
    margin: 15,
    fontSize: 12,
  },
}));

export default function Top() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <div>
          <div className="wrapper">
            <span>
              <h4 className={styles.main}>
                Top Selling Products
              </h4>
            </span>
            <span className={classes.seeMore}>
              <Link href="#">
                <a>See more</a>
              </Link>
            </span>
          </div>
          <div>
            <Grid container spacing={1} className={classes.grid}>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
              <Grid item xs={2}>
                <SimpleProduct />
              </Grid>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}
