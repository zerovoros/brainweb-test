import { Component } from "react";
import pizzaService from "../../services/pizza.service";
import styles from './Home.module.scss';

class Home extends Component {

	constructor(props: any) {
		super(props);
	}

	async componentDidMount() {
		const x = await pizzaService.getSizeList();
		console.log(x);
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