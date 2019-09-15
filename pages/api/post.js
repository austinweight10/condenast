import topHeadlines from "../../utils/api/top-headlines";
import everything from "../../utils/api/everything";

export default async (req, res) => {
	const { filter, language, title, country } = req.body;

	let data;

	if (filter) {
		try {
			data = await everything({ filter, language, API_KEY_NEWS: process.env.API_KEY_NEWS });
		} catch (error) {
			// todo error handling
			console.error(error);
		}
	} else {
		try {
			data = await topHeadlines({ country, API_KEY_NEWS: process.env.API_KEY_NEWS });
		} catch (error) {
			// todo error handling
			console.error(error);
		}
	}

	const {
		data: { articles }
	} = data;

	res.setHeader("Content-Type", "application/json");
	res.statusCode = 200;
	res.end(JSON.stringify(articles.find(article => title === article.title)));
};
