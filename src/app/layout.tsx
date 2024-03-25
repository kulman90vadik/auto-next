'use client'

import Head from 'next/head'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './styles/reset.scss'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<link rel='shortcut icon' href='/images/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/images/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/images/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/images/favicon-16x16.png'
				/>
			</Head>

			<html lang='en'>
				<body>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<Header />
							<main>{children}</main>
							<Footer />
						</PersistGate>
					</Provider>
				</body>
			</html>
		</>
	)
}

export default Layout
