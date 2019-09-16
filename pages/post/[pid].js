import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Post from "../../components/Post";
import Layout from "../../components/Layout";
import apiPost from "../../utils/api/apiPost";

/* api calls would normally be done in
   pid.getInitialProps I have only do this 
   to illustrate the seperation of frontend and 
   backend and understanding of lifecycle methods 
   this would also allow ssr */

const pid = () => {
	const router = useRouter();
	const { pid, filter } = router.query;
	const [post, setPost] = useState();

	const getData = async () => {
		try {
			const { pid, filter } = router.query;
			const response = await apiPost({ pid, filter });
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
