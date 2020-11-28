import React from 'react';
import Head from 'next/head';
import MainHeader from '../components/header/Header';
import MainFooter from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: any) {
	return (
		<React.Fragment>
			<Head>
				<title>TESTE BRAINWEB</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			</Head>
			<MainHeader></MainHeader>
			<Loader></Loader>
			<Component {...pageProps} />
			{/* <MainFooter></MainFooter> */}
		</React.Fragment>
	);
}

export default MyApp;
