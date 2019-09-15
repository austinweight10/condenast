import axios from "axios";
import urls from "./urls";

export default async ({ filter, language = "en", API_KEY_NEWS }) =>
	await axios({
		method: "get",
		url: `${urls.topHeadlines}?q=${filter}&language=${language}&apiKey=${API_KEY_NEWS}`
	});
