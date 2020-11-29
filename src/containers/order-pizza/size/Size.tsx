import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { Component } from "react";
import pizzaService from "../../../services/pizza.service";
import styles from './Size.module.scss';

class Size extends Component {
	sizes: any[] = [];
	size = '';

	constructor(props: any) {
		super(props);

		this.size = props.size;
		this.sizes = props.sizes;
		this.state = {
			size: this.size,
			sizes: this.sizes
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.size = event.target.value;
		pizzaService.setSize(this.size);
		this.setState({ size: this.size });
	}

	render() {
		return (
			<section>
				<form>
					<FormControl component="fieldset">
						<h2>Tamanho</h2>
						<RadioGroup aria-label="sizes" name="sizes" value={this.size} onChange={this.handleChange}>
							{
								this.sizes.map(size => {
									return (<FormControlLabel key={size.name} value={size.name} control={<Radio />} label={size.name} />);
								})
							}
						</RadioGroup>
					</FormControl>
				</form>
			</section>
		);
	}
}

export default Size;