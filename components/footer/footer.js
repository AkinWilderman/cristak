import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

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
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Cristak Careers
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  About Us
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Privacy Policy
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Terms and Conditions
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Promotions
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Souvenir Services
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Souvenir printing services
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Digital services
                </Typography>
              </a>
            </Link>
          </li>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Get Help </h5>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Help Center
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Return a product
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Report Seller or Shop Owner
                </Typography>
              </a>
            </Link>
          </li>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Ask for a refund
                </Typography>
              </a>
            </Link>
          </li>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Make money with US </h5>
          <li className="footer-list">
            <Link href="#">
              <a>
                <Typography variant="caption" component="p">
                  Become a Seller
                </Typography>
              </a>
            </Link>
          </li>
        </div>
        <div className={classes.divs}>
          <h5 className={classes.text}> Sellers Hub </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
