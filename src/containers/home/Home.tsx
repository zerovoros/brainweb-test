import { Component } from "react";
import Link from 'next/link'
import styles from './Home.module.scss';

class Home extends Component {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<section className={styles.home}>
				<p>candidato: Bruno Felipe P. Gonçalves</p>
				<p>e-mail: brunnofpg@hotmail.com</p>
				<Link href="https://github.com/zerovoros/brainweb-test"><a target="_blank">Acessar Github</a></Link>
			</section>
		);
	}
}

export default Home;