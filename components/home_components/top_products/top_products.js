import React from 'react';
import '../../../styles/top.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Top() {
  return (
    <div>
      <Paper>
        <div>
          <div className="main">
            <h3>
              Top Products
            </h3>
          </div>
          <div>
            <Grid container alignContent="space-between">
              <h1> 1 </h1>
              <h1> 1 </h1>
              <h1> 1 </h1>
              <h1> 1 </h1>
              <h1> 1 </h1>
            </Grid>
          </div>
        </div>
      </Paper>
    </div>
  );
}
