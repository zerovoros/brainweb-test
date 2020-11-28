import { Link } from '@material-ui/core';
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
					<Link href="/">Search</Link>
				</li>
				<li>
					<Link href="/sets">Sets</Link>
				</li>
			</ul>
		</header>
		);
	}
}

export default MainHeader;