import axios from "axios";
import urls from "./urls";

export default async ({ country = "gb", API_KEY_NEWS }) =>
	await axios({
		method: "get",
		url: `${urls.topHeadlines}?country=${country}&apiKey=${API_KEY_NEWS}`
	});
