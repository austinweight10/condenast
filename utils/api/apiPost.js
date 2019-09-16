import axios from "axios";

export default async ({ filter = "", pid }) =>
	await axios({
		method: "post",
		url: "/api/post",
		data: {
			title: pid,
			filter
		}
	});
