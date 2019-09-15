import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { useDidMount } from "rooks";
import axios from "axios";
import Filters from "../components/Filters";
import Posts from "../components/Posts";
import Layout from "../components/Layout";

const HomepageSC = styled.div`
	h1 {
		width: 100%;
		text-align: center;
		font-family: "Playfair Display", serif;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-size: 26px;
	}
`;

const Home = () => {
	const [posts, setPosts] = useState({
		articles: [],
		status: false,
		totalResults: 0
	});
	const [filter, setFilter] = useState("");

	useDidMount(async () => {
		try {
			const response = await axios({
				method: "post",
				url: "/api/top-headlines",
				data: {
					country: "gb"
				}
			});
			setPosts(response.data);
		} catch (error) {
			// todo error handling
			console.error(error);
		}
	});

	return (
		<Layout>
			<HomepageSC>
				<Head>
					<title>Austin's News App</title>
				</Head>

				<div>
					<h1>Austin's News App</h1>
					<div>
						<Filters setPosts={setPosts} filter={{ filter, setFilter }} />
						<Posts posts={posts.articles} filter={filter} />
					</div>
				</div>
			</HomepageSC>
		</Layout>
	);
};

export default Home;
