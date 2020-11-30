import Axios from "axios";
import { Subject } from "rxjs";

const flavor = new Subject();
const border = new Subject();
const size = new Subject();
const dough = new Subject();

const API = 'http://localhost:3000/api';

const pizzaService = {
	setFlavor: (value: string[]) => flavor.next(value),
	getFlavor: () => flavor.asObservable(),

	setBorder: (value: string) => border.next(value),
	getBorder: () => border.asObservable(),

	setDough: (value: string) => dough.next(value),
	getDough: () => dough.asObservable(),

	setSize: (value: string) => size.next(value),
	getSize: () => size.asObservable(),

	getFlavorList: async () => {
		try {
			const flavor = await (await fetch(`${API}/flavor`)).json();
			return flavor;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	getBorderList: async () => {
		try {
			const border = await (await fetch(`${API}/border`)).json();
			return border;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	getDoughList: async () => {
		try {
			const dough = await (await fetch(`${API}/dough`)).json();
			return dough;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	getSizeList: async () => {
		try {
			const size = await (await fetch(`${API}/size`)).json();
			return size;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	getRecommended: async () => {
		try {
			const recommended = await (await fetch(`${API}/recommended`)).json();
			return recommended;
		} catch (error) {
			console.log(error);
			return error;
		}
	},

	savePizza: async (body: any) => {
		try {
			const pizza: any = await Axios.post(`${API}/pizza`, body);
			return pizza;
		} catch (error) {
			console.log(error);
			return error;
		}
	}
};

export default pizzaService;
