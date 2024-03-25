import { getAllProducts, getProductId } from '@/app/services/getProducts'
import { FC } from 'react'
import globals from '../../styles/globals.module.scss'
import styles from './pageId.module.scss'
import Image from 'next/image'

type Props = { params: { id: string } }

export async function generateMetadata({ params: { id } }: Props) {
	const product: productType = await getProductId(id)
	return {
		title: product.title.replace(/\s+/g, ' ')
	}
}

export async function generateStaticParams() {
	const products: productType[] = await getAllProducts()
	return products.map((product: productType) => ({
		id: product.id
	}))
}

const PageId: FC<Props> = async ({ params: { id } }: Props) => {
	const product: productType = await getProductId(id)
	console.log(product)

	return (
		<section className={styles.pageId}>
			{/* <div className={globals.container}>
				<article className={styles.article}>
					<Image
						className={styles.image}
						src={product.images[0].image}
						width={300}
						height={210}
						alt={product.title}
						priority
					/>
					<div className={styles.box}>
						<span className={styles.title}>{product.title}</span>
						<p className={styles.description}>{product.description}</p>
						<span className={styles.price}>
							{new Intl.NumberFormat('de-DE', {
								style: 'currency',
								currency: 'EUR'
							}).format(product.price)}
						</span>
					</div>
				</article>
			</div> */}
		</section>
	)
}

export default PageId
