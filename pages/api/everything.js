import everything from "../../utils/api/everything";

export default async (req, res) => {
	try {
		const { filter, language } = req.body;
		const response = await everything({ filter, language, API_KEY_NEWS: process.env.API_KEY_NEWS });
		res.setHeader("Content-Type", "application/json");
		res.statusCode = 200;
		res.end(JSON.stringify(response.data));
	} catch (error) {
		// todo error handling
		console.error(error);
	}
};
