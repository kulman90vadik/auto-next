// 'use client'
import styles from './styles/Home.module.scss'
import './styles/reset.scss';
import { Metadata } from 'next'

import { FC } from 'react'
import HeroSlider from './components/HeroSlider/HeroSlider';

export const metadata: Metadata = {
	title: "Home | Auto",
	description: "Site Auto"
}

const Home:FC = () => {
	return (
			<section className={styles.home}>
				<HeroSlider />
			</section>
	)
}

export default Home;
