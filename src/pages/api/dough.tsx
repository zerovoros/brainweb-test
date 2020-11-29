const doughs = [{ name: 'Tradicional' }, { name: 'Fina' }, { name: 'Grossa' }];

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: doughs });
}