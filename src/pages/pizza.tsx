import { Button, Step, StepLabel, Stepper } from '@material-ui/core';
import React, { Component } from 'react';
import Dough from '../containers/order-pizza/dough/Dough';
import Flavor from '../containers/order-pizza/flavor/Flavor';
import Size from '../containers/order-pizza/size/Size';
import pizzaService from '../services/pizza.service';

class Pizza extends Component {

	activeStep = 0;
	steps = ['Size', 'Dough', 'Flavor'];

	doughs: any[] = [];
	sizes: any[] = [];
	flavors: any[] = [];
	borders: any[] = [];

	form: any = {
		border: '',
		dough: '',
		flavors: [''],
		size: ''
	};

	constructor(props: any) {
		super(props);
		this.sizes = props.sizes;
		this.doughs = props.doughs;
		this.borders = props.borders;
		this.flavors = props.flavors;

		this.state = {
			activeStep: 0,
			steps: this.steps,
			form: {
				border: '',
				dough: '',
				flavors: [''],
				size: ''
			}
		};

		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	static async getInitialProps(ctx: any) {
		const sizes = await pizzaService.getSizeList();
		const doughs = await pizzaService.getDoughList();
		const borders = await pizzaService.getBorderList();
		const flavors = await pizzaService.getFlavorList();

		return {
			sizes: sizes.data,
			doughs: doughs.data,
			borders: borders.data,
			flavors: flavors.data
		};
	}

	componentDidMount() {
		pizzaService.getSize().subscribe(size => {
			this.form.size = size;
			this.setState({ form: this.form });
			console.log(this.form);
		});

		pizzaService.getDough().subscribe(dough => {
			this.form.dough = dough;
			this.setState({ form: this.form });
			console.log(this.form);
		});

		pizzaService.getBorder().subscribe(border => {
			this.form.border = border;
			this.setState({ form: this.form });
			console.log(this.form);
		});

		pizzaService.getFlavor().subscribe(flavor => {
			this.form.flavors = flavor;
			this.setState({ form: this.form });
			console.log(this.form);
		});
	}

	handleNext() {
		this.activeStep++;
		this.setState({ activeStep: this.activeStep });
	};

	handleBack() {
		this.activeStep--;
		this.setState({ activeStep: this.activeStep });
	};

	handleReset() {
		this.activeStep = 0;
		this.setState({ activeStep: this.activeStep });
	};

	render() {
		const sizeProps = { size: this.form.size, sizes: this.sizes };
		const doughProps = { dough: this.form.dough, border: this.form.border, doughs: this.doughs, borders: this.borders };
		const flavorProps = { flavor: this.form.flavors, flavors: this.flavors };

		return (
			<section className="full-vh">
				<Stepper activeStep={this.activeStep} alternativeLabel>
					{this.steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div>
					{this.activeStep === 0 ? (<Size {...sizeProps}></Size>) : ('')}
					{this.activeStep === 1 ? (<Dough {...doughProps}></Dough>) : ('')}
					{this.activeStep === 2 ? (<Flavor {...flavorProps}></Flavor>) : ('')}
					<div>
						<Button disabled={this.activeStep === 0} onClick={this.handleBack}>
							Back
						</Button>
						<Button variant="contained" color="primary" onClick={this.handleNext}>
							{this.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</div>
				</div>
			</section>
		);
	}
}

export default Pizza;
