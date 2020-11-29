const sizes = [{ size: 25, name: 'Pequena' }, { size: 30, name: 'Média' }, { size: 35, name: 'Grande' }];

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: sizes });
}