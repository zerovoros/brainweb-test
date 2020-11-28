const sizes = [{ size: 25, name: 'Pequena' }, { size: 30, name: 'Média' }, { size: 35, name: 'Grande' }];

const pizzaService = {
	getSizeList: () => {
		return sizes;
	},

	getDoughList: () => {
		return [];
	},

	getFlavorList: () => {
		return [];
	},

	getRecommended: () => {
		return {};
	}
};

export default pizzaService;
