import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

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
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Hello</h1>
    </div>
  );
};

export default Footer;
