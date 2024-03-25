'use client'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import styles from './basket.module.scss'
import Image from 'next/image'
import globals from '../styles/globals.module.scss'
import { deleteCard } from '../redux/slices/basketClise'
import { btnChange } from '../redux/slices/catalogClise'

const Shopping = () => {
	const dispatch = useDispatch();
	const delCart = (card: productType) => {

    dispatch(deleteCard(card));
    dispatch(btnChange(card));
    // console.log(obj);
  };
	const basket = useSelector((state: RootState) => state.basket.basket)

	return (
		<>
			{/* <Head>
				<title> Home | Shopping</title>
			</Head> */}
			<section className={styles.basket}>
				<div className={globals.container}>
					{basket.length > 0 ? (
						<ul className={styles.list}>
							{basket.map(card => {
								return (
									<li className={styles.item} key={card.id}>
										<article className={styles.article}>
											<Image
												className={styles.image}
												src={card.images[0].image}
												width={300}
												height={210}
												alt={card.title}
												priority
											/>
											<div className={styles.box}>
												<span className={styles.title}>{card.title}</span>
												<p className={styles.description}>{card.description}</p>
												<span className={styles.price}>
													{new Intl.NumberFormat('de-DE', {
														style: 'currency',
														currency: 'EUR'
													}).format(card.price)}
												</span>
											</div>
											<svg onClick={() => delCart(card)} className={styles.delete} width="8px" height="8px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/></svg>
										</article>
									</li>
								)
							})}
						</ul>


					) : (
						<Image
							className={styles.imageBig}
							src='images/empty-cart.svg'
							width={220}
							height={81}
							style={{ width: '70%', height: '50%' }}
							alt='Empty Cart'
							priority
						/>
					)}
				</div>
			</section>
		</>
	)
}

export default Shopping
function deleteCartBasket(card: productType): any {
	throw new Error('Function not implemented.')
}

