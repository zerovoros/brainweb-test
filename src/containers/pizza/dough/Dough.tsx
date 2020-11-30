import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Component } from "react";
import pizzaService from "../../../services/pizza.service";
import styles from './Dough.module.scss';

class Dough extends Component {
	doughs: any[] = [];
	dough = '';
	borders: any[] = [];
	border = '';

	constructor(props: any) {
		super(props);

		this.doughs = props.doughs;
		this.dough = props.dough;
		this.borders = props.borders;
		this.border = props.border;
		this.state = {
			dough: this.dough,
			doughs: this.doughs,
			border: this.border,
			borders: this.borders
		};
		this.handleChangeDough = this.handleChangeDough.bind(this);
		this.handleChangeBorder = this.handleChangeBorder.bind(this);
	}

	handleChangeDough(event: any) {
		this.dough = event.target.value;
		pizzaService.setDough(this.dough);
		this.setState({ dough: this.dough });
	}

	handleChangeBorder(event: any) {
		this.border = event.target.value;
		pizzaService.setBorder(this.border);
		this.setState({ border: this.border });
	}

	render() {
		return (
			<form>
				<div className={`row ${styles.radios}`}>
					<FormControl component="div">
						<h2>Massa</h2>
						<RadioGroup className="radio-group" aria-label="doughs" name="doughs" value={this.dough} onChange={this.handleChangeDough}>
							{this.doughs.map(dough => {
								return (<FormControlLabel key={dough.name} value={dough.name} control={<Radio />} label={dough.name} />);
							})}
						</RadioGroup>
					</FormControl>
					<FormControl component="div">
						<h2>Borda</h2>
						<RadioGroup aria-label="borders" name="borders" value={this.border} onChange={this.handleChangeBorder}>
							{this.borders.map(border => {
								return (<FormControlLabel key={border.name} value={border.name} control={<Radio />} label={border.name} />);
							})}
						</RadioGroup>
					</FormControl>
				</div>
			</form>
		);
	}
}

export default Dough;