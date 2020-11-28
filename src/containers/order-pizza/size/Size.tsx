import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { Component } from "react";
import pizzaService from "../../../services/pizza.service";
import styles from './Size.module.scss';

class Size extends Component {

	sizes: any[] = [];

	constructor(props: any) {
		super(props);
		this.state = { sizes: [] };
	}

	async componentDidMount() {
		this.sizes = await pizzaService.getSizeList();
		this.setState({ sizes: this.sizes });
	}

	next() {

	}

	render() {
		return (
			<section className={styles.size}>
				<h2>Tamanho</h2>

				<form>
					<FormControl component="fieldset">
						<FormLabel component="legend">Tamanho</FormLabel>
						<RadioGroup aria-label="sizes" name="sizes">
							{
								this.sizes.map(size => {
									return (<FormControlLabel value={size.value} control={<Radio />} label={size.name} />);
								})
							}
						</RadioGroup>
					</FormControl>

					<Button type="button" onClick={this.next}>Avançar</Button>
				</form>

			</section>
		);
	}
}

export default Size;