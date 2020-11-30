import { Table, TableBody, TableCell, TableRow, Toolbar, Typography } from "@material-ui/core";
import { Component } from "react";
import styles from './Resume.module.scss';

class Resume extends Component {

	rows: any = [
		{ label: 'Tamanho', value: '' },
		{ label: 'Massa', value: '' },
		{ label: 'Borda', value: '' },
		{ label: 'Sabor', value: [''] },
	]

	constructor(props: any) {
		super(props);

		this.rows = [
			{ label: 'Tamanho', value: props.form.size },
			{ label: 'Massa', value: props.form.dough },
			{ label: 'Borda', value: props.form.border },
			{
				label: props.form.flavor.length > 1 ? 'Sabores' : 'Sabor',
				value: props.form.flavor.length > 1 ? `${props.form.flavor[0]}, ${props.form.flavor[1]}` : `${props.form.flavor[0]}`
			}
		]
		this.state = { rows: this.rows };
	}

	render() {
		return (
			<div className={`row ${styles.resume}`}>
				<div className={styles.card}>
					<h2>Resumo</h2>
					<Table className={styles.table} size="medium" aria-label="resumo">
						<TableBody>
							{this.rows.map((row: any) => (
								<TableRow key={row.label}>
									<TableCell component="th" scope="row">{row.label}</TableCell>
									<TableCell align="right">{
										row.value
									}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Resume;