'use client'


import { FC, useState } from "react";

import styles from './Card.module.scss';
// import globals from '../../styles/globals.module.scss'
import Image from 'next/image'
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/app/redux/slices/basketClise";
import { btnChange } from "@/app/redux/slices/catalogClise";

type Props = {
  card: productType
}

const Card:FC<Props> = ({card}) => {
  const[count, setCount] = useState(0);
  const changeImage = (i: number) => {
    setCount(i);
  }
  const dispatch = useDispatch();
  
  const changeBasket = (card: productType) => {
    dispatch(addToBasket(card));
    dispatch(btnChange(card));
  };


  return (
    <article className={styles.card}>
      <Link	className={styles.link}	href={`/catalog/${card.id}`}>
        <div className={styles.photo}>
          <Image		
                className={styles.images}				
                src={card.images[count].image}
                width="200"
                height="200"
                style={{ width: '100%', height: '100%' }}
                alt={card.title}
              />
        </div>
			</Link>

      <ul className={styles.list}>
        {card.images.map((img, i) => {
          return (
          <li className={styles.item} key={i}>
            <button className={`${styles.btnImg} ${i === count ? styles.btnActive : ''}`} onClick={() => changeImage(i)} type="button" style={{ width: '100%' }}>
              <Image						
                src={img.image}
                width="50"
                height="50"
                style={{ width: '100%', height: '100%' }}
                alt={card.title}
            />
            </button>
          </li>
          )
        })}
      </ul>
      <span className={styles.title}>{card.title}</span>
      <span className={styles.price}>
      {new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'EUR'
				}).format(card.price)}
      </span>

        <button className={`${styles.btn} ${card.btnAddToCard ? styles.active : ''}`} type="button" onClick={() => changeBasket(card)}>
          Add to Card
        </button>
     

    </article>
  );
}
 
export default Card;