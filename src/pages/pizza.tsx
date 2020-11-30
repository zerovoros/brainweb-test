import { Backdrop, Button, Fade, Modal, Step, StepLabel, Stepper } from '@material-ui/core';
import React, { Component } from 'react';
import BonusModal from '../components/modal/bonus/Bonus';
import Dough from '../containers/pizza/dough/Dough';
import Flavor from '../containers/pizza/flavor/Flavor';
import Resume from '../containers/pizza/resume/Resume';
import Size from '../containers/pizza/size/Size';
import loaderService from '../services/loader.service';
import pizzaService from '../services/pizza.service';

class Pizza extends Component {

	activeStep = -1;
	steps = ['Tamanho', 'Massa', 'Sabor'];

	doughs: any[] = [];
	sizes: any[] = [];
	flavors: any[] = [];
	borders: any[] = [];

	form: any = {
		border: '',
		dough: '',
		flavor: [''],
		size: ''
	};

	recommended: any = {
		border: '',
		dough: '',
		flavor: [''],
		size: ''
	};

	modalOpen: boolean = false;
	bonusModalOpen: boolean = false;
	validated: boolean = false;

	constructor(props: any) {
		super(props);

		this.sizes = props.sizes;
		this.doughs = props.doughs;
		this.borders = props.borders;
		this.flavors = props.flavors;
		this.recommended = props.recommended;

		this.state = {
			activeStep: this.activeStep,
			steps: this.steps,
			form: this.form,
			recommended: this.recommended,
			validated: this.validated,
			modalOpen: this.modalOpen,
			bonusModalOpen: this.bonusModalOpen
		};

		this.handleNext = this.handleNext.bind(this);
		this.handleBack = this.handleBack.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.checkForm = this.checkForm.bind(this);
		this.applyRecommendation = this.applyRecommendation.bind(this);
	}

	static async getInitialProps(ctx: any) {
		const sizes = await pizzaService.getSizeList();
		const doughs = await pizzaService.getDoughList();
		const borders = await pizzaService.getBorderList();
		const flavors = await pizzaService.getFlavorList();
		const recommended = await pizzaService.getRecommended();

		return {
			sizes: sizes.data,
			doughs: doughs.data,
			borders: borders.data,
			flavors: flavors.data,
			recommended: recommended.data
		};
	}

	componentDidMount() {
		pizzaService.getSize().subscribe(size => {
			this.form.size = size;
			this.setState({ form: this.form });
			this.checkForm();
		});

		pizzaService.getDough().subscribe(dough => {
			this.form.dough = dough;
			this.setState({ form: this.form });
			this.checkForm();
		});

		pizzaService.getBorder().subscribe(border => {
			this.form.border = border;
			this.setState({ form: this.form });
			this.checkForm();
		});

		pizzaService.getFlavor().subscribe(flavor => {
			this.form.flavor = flavor;
			this.setState({ form: this.form });
			this.checkForm();
		});

		this.handleOpenModal();
	}

	handleNext() {
		this.activeStep++;
		this.setState({ activeStep: this.activeStep });
	};

	handleBack() {
		this.activeStep--;
		this.setState({ activeStep: this.activeStep });
	};

	async handleSave() {
		loaderService.newLoader();
		const response = await pizzaService.savePizza(this.form);
		loaderService.stopLoader();
		if (response.data.bonus) {
			this.bonusModalOpen = true;
			this.setState({ bonusModalOpen: true });
		} else {
			window.location.href = '/';
		}
	}

	checkForm() {
		if (this.form.size != '' && this.form.border != '' && this.form.dough != '' && this.form.flavor[0] != '') {
			this.validated = true;
			this.setState({ validated: true });
		} else {
			this.validated = false;
			this.setState({ validated: false });
		}
	}

	async applyRecommendation() {
		this.form = this.recommended;
		await this.setState({ form: this.form });
		this.handleCloseModal();
		this.checkForm();
	}

	handleOpenModal() {
		this.modalOpen = true;
		this.setState({ modalOpen: true });
	}

	handleCloseModal() {
		this.handleNext();
		this.modalOpen = false;
		this.setState({ modalOpen: false });
	}

	render() {
		const sizeProps = { size: this.form.size, sizes: this.sizes };
		const doughProps = { dough: this.form.dough, border: this.form.border, doughs: this.doughs, borders: this.borders };
		const flavorProps = { flavor: this.form.flavor, flavors: this.flavors };
		const resumeProps = { form: this.form };
		const bonusModalProps = { open: this.bonusModalOpen };

		return (
			<section className="full-vh">
				<Stepper activeStep={this.activeStep} alternativeLabel>
					{this.steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<div className="step">
					{this.activeStep == 0 ? (<Size {...sizeProps}></Size>) : ('')}
					{this.activeStep == 1 ? (<Dough {...doughProps}></Dough>) : ('')}
					{this.activeStep == 2 ? (<Flavor {...flavorProps}></Flavor>) : ('')}
					{this.activeStep == 3 ? (<Resume {...resumeProps}></Resume>) : ('')}
					{this.activeStep == this.steps.length ? (
						<div className="btn-group">
							<Button onClick={this.handleBack}>
								Voltar
							</Button>
							<Button variant="contained" disabled={!this.validated} color="primary" onClick={this.handleSave}>
								Finalizar
							</Button>
						</div>
					) : (
						<div className="btn-group">
							<Button disabled={this.activeStep == 0} onClick={this.handleBack}>
								Voltar
							</Button>
							<Button variant="contained" color="primary" onClick={this.handleNext}>
								Prosseguir
							</Button>
						</div>
					)}
				</div>
				<Modal aria-labelledby="modal-title" aria-describedby="modal-description" open={this.modalOpen} className="modal"
						closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}}>
					<Fade in={this.modalOpen}>
						<div className="paper">
							<h2 id="modal-title">RECOMENDAÇÃO</h2>
							<p id="modal-description">
								Deseja escolher a pizza recomendada do dia?
							</p>
							<p>
								Tamanho: {this.recommended.size}<br />
								Massa: {this.recommended.dough}<br />
								Borda: {this.recommended.border}<br />
								Sabor: {this.recommended.flavor[0]}<br />
							</p>
							<Button variant="contained" onClick={this.handleCloseModal}>Não</Button>
							<Button variant="contained" onClick={this.applyRecommendation}>Sim</Button>
						</div>
					</Fade>
				</Modal>
				{this.bonusModalOpen ? (<BonusModal {...bonusModalProps}></BonusModal>):('')}
			</section>
		);
	}
}

export default Pizza;
