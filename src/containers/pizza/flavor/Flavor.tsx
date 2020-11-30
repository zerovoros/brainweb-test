import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Component } from "react";
import pizzaService from "../../../services/pizza.service";
import styles from './Flavor.module.scss';

class Flavor extends Component {
	flavors: any[] = [];
	flavor = [{ index: 0, value: ''}];
	half: string = 'false';

	constructor(props: any) {
		super(props);

		const flavor = [];

		for (let i=0; i<props.flavor.length; i++) {
			flavor.push({ index: i, value: props.flavor[i] })
		}

		if (flavor.length > 0) this.flavor = flavor;

		this.flavors = props.flavors;
		this.half = `${this.flavor.length > 1}`;

		this.state = {
			flavor: this.flavor,
			flavors: this.flavors,
			half: this.half
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeHalf = this.handleChangeHalf.bind(this);
		this.addFlavor = this.addFlavor.bind(this);
		this.removeFlavor = this.removeFlavor.bind(this);
		this.updateFlavors = this.updateFlavors.bind(this);
	}

	handleChange(event: any) {
		if (event.target.name == 'flavor0') this.flavor[0].value = event.target.value;
		else this.flavor[1].value = event.target.value;
		this.setState({ flavor: this.flavor });
		this.updateFlavors();
	}

	handleChangeHalf(event: any) {
		this.half = event.target.value;
		this.setState({ half: this.half });
		if (this.half == 'true') this.addFlavor();
		else this.removeFlavor();
	}

	addFlavor() {
		this.flavor.push({ index: this.flavor.length, value: '' });
		this.setState({ flavor: this.flavor });
		this.updateFlavors();
	}

	removeFlavor() {
		this.flavor.pop();
		this.setState({ flavor: this.flavor });
		this.updateFlavors();
	}

	updateFlavors() {
		const chosenFlavors: string[] = [];
		this.flavor.forEach((element: any) => chosenFlavors.push(element.value));
		pizzaService.setFlavor(chosenFlavors);
	}

	render() {
		return (
			<form>
				<div className={`row ${styles.half}`}>
					<FormControl component="div">
						<RadioGroup aria-label="half" name="half" value={this.half} onChange={this.handleChangeHalf} row>
							<FormControlLabel value="false" control={<Radio />} label="1 Sabor" />
							<FormControlLabel value="true" control={<Radio />} label="2 Sabores" />
						</RadioGroup>
					</FormControl>
				</div>
				<div className={`row ${styles.flavors}`}>
					{this.flavor.map(select => {
						return (
							<FormControl className={styles.control} key={select.index} component="div">
								<h2>{`Sabor ${select.index+1}`}</h2>
								<RadioGroup aria-label="flavors" key={select.index} name={`flavor${select.index}`} value={this.flavor[select.index].value} onChange={this.handleChange}>
									{this.flavors.map(flavor => {
										return (<FormControlLabel key={flavor.name} value={flavor.name} control={<Radio />} label={flavor.name} />);
									})}
								</RadioGroup>
							</FormControl>
						);
					})}
				</div>
			</form>
		);
	}
}

export default Flavor;