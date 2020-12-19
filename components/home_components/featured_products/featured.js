import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styles from '../../../styles/top.module.css';
import SimpleProduct from '../../single_product/simple';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1200,
    marginLeft: 60,
  },
  grid: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  seeMore: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
}));

export default function Featured() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <div>
          <div className={classes.seeMore}>
            <div className="flex">
              <h4 className={styles.main}>
                Featured Products
              </h4>
            </div>
            <div>
              <Link href="#"><a> See more </a></Link>
            </div>
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
