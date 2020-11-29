const recommended = { size: 'Grande', dough: 'Fina', 'border': 'Requeijão', 'flavors': ['X'] };

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: recommended });
}