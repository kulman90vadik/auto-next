'use client'
import globals from '../../styles/globals.module.scss'
import styles from './Header.module.scss'
import Navbar from '../Navbar/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'
import Login from '../Login/Login'
import IconCart from '../IconCart/IconCart'
import { fetchCollection } from '@/app/redux/slices/catalogClise'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/app/redux/store'
import { usePathname } from 'next/navigation'

const Header: FC = () => {
	const pathname = usePathname()
	const isMounted = useRef(false);
	const dispatch = useAppDispatch();

	const category = useSelector((state: RootState) => state.products.category);
	const sortId = useSelector((state: RootState) => state.products.sortId);
	
	useEffect( () => {
		if (isMounted.current) {
			let categoryId = category ? `category=${category}` : "";
			let sort = sortId ? `&sortBy=price&order=${sortId}` : '';
			dispatch(fetchCollection({categoryId, sort}));
		}
		isMounted.current = true;
	}, [category, sortId])



	return (
		// <header className={`${pathname !== '/' ? ${styles.header} : ''}`}>
		<header className={`${styles.header} ${'/' !== pathname ? styles.bg : ''}`}>
			{/* {`${styles.link} ${punkt.link === pathname ? styles.active : styles.link}`} */}
			<div className={`${globals.container} ${styles.container}`}>
				<Link href='/' className={styles.logo}>
					<Image
						className={styles.image}
						src='/logo.png'
						width={220}
						height={81}
						alt='Logo'
						priority
					/>
				</Link>
				<Navbar />
				<Login />
				<IconCart />
			</div>
		</header>
	)
}

export default Header
