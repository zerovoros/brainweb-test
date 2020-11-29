const flavors = [
	{ name: 'X', ingredients: 'LoremIpsum' },
	{ name: 'Y', ingredients: 'LoremIpsum' }
];

export default function handler(req: any, res: any) {
	res.status(200).json({ status: true, data: flavors });
}