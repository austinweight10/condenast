import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Post from "../../components/Post";
import Layout from "../../components/Layout";

const pid = () => {
	const router = useRouter();
	const { pid, filter } = router.query;
	const [post, setPost] = useState();

	const getData = async () => {
		try {
			const { pid, filter } = router.query;
			const response = await axios({
				method: "post",
				url: "/api/post",
				data: {
					title: pid,
					filter
				}
			});
			setPost(response.data);
		} catch (error) {
			// todo error handling
			console.error(error);
		}
	};

	useEffect(() => {
		if ((pid || filter) && !post) {
			getData();
		}
	});

	return (
		<Layout>
			<Post post={post} />
		</Layout>
	);
};

export default pid;
