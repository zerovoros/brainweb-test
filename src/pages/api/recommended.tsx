const recommended = { size: 'Grande', dough: 'Tradicional', 'border': 'Requeijão', 'flavor': ['Pepperoni'] };

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: recommended });
}