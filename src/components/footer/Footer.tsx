import { Component } from "react";
import styles from './Footer.module.scss';

class MainFooter extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<footer className={styles.footer}>
				<p>
					Bruno Gonçalves - brunnofpg@hotmail.com <br />
					Teste BrainWeb - 11/2020
				</p>
			</footer>
		);
	}
}

export default MainFooter;