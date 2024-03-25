'use client'

import { Metadata } from 'next';
import styles from './catalog.module.scss';
import '../styles/reset.scss';
import globals from '../styles/globals.module.scss';
import { FC, useEffect } from 'react';
import Card from '../components/Card/Card';
import { RootState, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';



const Catalog:FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  // const products = await getAllProducts()
  console.log(products);
  return (
    <>
      <section className={styles.catalog}>
        <div className={globals.container}>
          <ul className={styles.list}>
            {products.map((card: productType) => <Card card={card} key={card.id} />)}
          </ul>
        </div>
      </section>

    </>
  );
}
 
export default Catalog;