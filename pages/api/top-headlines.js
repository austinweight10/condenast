import topHeadlines from "../../utils/api/top-headlines";

export default async (req, res) => {
	try {
		const { country = "gb" } = req.body;
		const response = await topHeadlines({ country, API_KEY_NEWS: process.env.API_KEY_NEWS });
		res.setHeader("Content-Type", "application/json");
		res.statusCode = 200;

		res.end(JSON.stringify(response.data));
	} catch (error) {
		// todo error handling
		console.error(error);
	}
};
