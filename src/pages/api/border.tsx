const borders = [{ name: 'Sem borda' }, { name: 'Catupiry' }, { name: 'Cheddar' }, { name: 'Requeijão' }];

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: borders });
}