import Link from 'next/link'
import { Component } from 'react';
import styles from './Header.module.scss';

class MainHeader extends Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<header className={styles.header}>
			<ul>
				<li>
					<Link as="/" href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link as="/pizza" href="/pizza">
						<a>Montar pizza</a>
					</Link>
				</li>
			</ul>
		</header>
		);
	}
}

export default MainHeader;