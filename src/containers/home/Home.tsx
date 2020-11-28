import { Component } from "react";
import styles from './Home.module.scss';

class Home extends Component {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<section className={styles.home}>
				<p>HOME WORKS</p>
			</section>
		);
	}
}

export default Home;