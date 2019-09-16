import axios from "axios";

export default async ({ selectedFilter, language = "en" }) =>
	await axios({
		method: "post",
		url: "/api/everything",
		data: {
			filter: selectedFilter.filter,
			language
		}
	});
