import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#323232',
    marginLeft: 0,
    marginRight: 0,
    height: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: 1000,
    marginLeft: 150
  },
  divs: {
    marginTop: 50,
  },
  text: {
    color: 'white',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.divs}>
          <h5 className={classes.text}> About Cristak </h5>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Get Help </h5>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Mkae money with US </h5>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Sellers Hub </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
