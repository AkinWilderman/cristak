import React from 'react';
import Image from 'next/image';
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
          <Image src="/image/leaderboard.jpg" width={1170} height={60} />
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
