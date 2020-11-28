import { CircularProgress } from '@material-ui/core';
import { Component } from 'react';
import loaderService from '../../services/loader.service';
import styles from './Loader.module.scss';

class Loader extends Component {

	loading: any = false;

	constructor(props: any) {
		super(props);
		this.state = { loading: false };
	}

	componentDidMount() {
		loaderService.getLoading().subscribe(loading => {
			this.loading = loading;
			this.setState({ loading: loading });
		});
	}

	render() {
		return (
			<div className={`${styles.loader} ${this.loading ? '' : 'hidden'}`}>
				<CircularProgress />
			</div>
		);
	}
}

export default Loader;