import React from 'react';
import styles from '../../styles/layout.module.css';
import Aux from './Auxy';
import PrimarySearchAppBar from '../navigation/navigation';
import Categories from '../category/categories';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <Aux>
      <div>
        <div className="headerAds">
          <h1> Hello, welcome to Cristak bazaar. Image or flash ads goes here. Akin says hi! </h1>
        </div>
        <div className="navPosition">
          <div>
            <PrimarySearchAppBar />
          </div>
          <div>
            <Categories />
          </div>
        </div>
      </div>
      <main className={styles.container}>{children}</main>
    </Aux>
  );
}
