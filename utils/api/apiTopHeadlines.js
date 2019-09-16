import axios from "axios";
import urls from "./urls";

export default async () =>
	await axios({
		method: "post",
		url: "/api/top-headlines",
		data: {
			country: "gb"
		}
	});
