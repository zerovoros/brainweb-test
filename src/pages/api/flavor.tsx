const flavors = [{ name: '4 Queijos' }, { name: 'Frango' }, { name: 'Lombo' }, { name: 'Pepperoni' }];

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: flavors });
}