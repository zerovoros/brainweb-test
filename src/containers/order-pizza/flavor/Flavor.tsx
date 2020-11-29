import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Component } from "react";
import pizzaService from "../../../services/pizza.service";
import styles from './Flavor.module.scss';

class Flavor extends Component {
	flavors: any[] = [];
	flavor = '';

	constructor(props: any) {
		super(props);

		this.flavor = props.flavor;
		this.flavors = props.flavors;
		this.state = {
			flavor: this.flavor,
			flavors: this.flavors
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.flavor = event.target.value;
		pizzaService.setFlavor(this.flavor);
		this.setState({ name: this.flavor });
	}

	render() {
		return (
			<section>
				<form>
					<FormControl component="fieldset">
						<h2>Sabor</h2>
						<RadioGroup aria-label="flavors" name="flavors" value={this.flavor} onChange={this.handleChange}>
							{
								this.flavors.map(flavor => {
									return (<FormControlLabel key={flavor.name} value={flavor.name} control={<Radio />} label={flavor.name} />);
								})
							}
						</RadioGroup>
					</FormControl>
				</form>
			</section>
		);
	}
}

export default Flavor;