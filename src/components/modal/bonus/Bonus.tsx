import { Backdrop, Button, Fade, Modal } from '@material-ui/core';
import { Component } from 'react';
import styles from './Bonus.module.scss';

class BonusModal extends Component {

	modalOpen = false;

	constructor(props: any) {
		super(props);

		this.modalOpen = props.open;
		this.state = { modalOpen: this.modalOpen };

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.modalOpen = true;
		this.setState({ modalOpen: true });
	}

	handleCloseModal() {
		this.modalOpen = false;
		this.setState({ modalOpen: false });
		window.location.href = '/';
	}

	render() {
		return (
			<Modal aria-labelledby="modal-title" aria-describedby="modal-description" open={this.modalOpen} className="modal"
					closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500}} onClose={this.handleCloseModal}>
				<Fade in={this.modalOpen}>
					<div className="paper">
						<h2 id="modal-title">PARABÉNS!!</h2>
						<p id="modal-description">Por ter escolhido a pizza recomendada, você recebeu pontos de benefícios.</p>
						<Button onClick={this.handleCloseModal}>Entendido</Button>
					</div>
				</Fade>
			</Modal>
		);
	}
}

export default BonusModal;