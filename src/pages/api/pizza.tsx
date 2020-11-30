const recommended = { size: 'Grande', dough: 'Tradicional', 'border': 'Requeijão', 'flavor': ['Pepperoni'] };

export default function handler(req: any, res: any) {
	const isRecommended = checkIfRecommended(req.body);

	if (isRecommended) req.body.bonus = true;
	else req.body.bonus = false;

	res.status(200).json(req.body);
}

function checkIfRecommended(pizza: any) {
	return pizza.size == recommended.size && pizza.border == recommended.border && pizza.dough == recommended.dough &&
		pizza.flavor.length == recommended.flavor.length && pizza.flavor[0] == recommended.flavor[0];
}