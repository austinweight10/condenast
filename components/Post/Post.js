import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PostSC = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 20px;
	h1 {
		width: 50%;
		font-family: "Playfair Display", serif;
		text-transform: uppercase;
		letter-spacing: 2.5px;
		font-size: 26px;
		margin: 20px;
	}
	div {
		max-width: 300px;
		margin: 20px;
	}
	span {
		letter-spacing: 1px;
		font-family: "Cantarell", sans-serif;
		font-size: 9px;
		border-bottom: 1px solid gray;
	}
	p {
		width: 100%;
		font-family: "Playfair Display", serif;
		letter-spacing: 1.5px;
		font-size: 16px;
	}
	img {
		width: 100%;
	}
	a {
		letter-spacing: 1px;
		font-family: "Cantarell", sans-serif;
		font-size: 10px;
		border-bottom: 1px solid gray;
		text-decoration: none;
	}
`;

const Post = ({ post }) =>
	post ? (
		<PostSC>
			<h1 data-test="Post_title">{post.title}</h1>

			<div>
				<span data-test="Post_source">Source: {post.source.name}</span>
				<br />
				<span data-test="Post_author">Author: {post.author}</span>
				<br />
				<span data-test="Post_intro">Into: {post.description}</span>
			</div>
			<img src={post.urlToImage} data-test="Post_img" />
			<p data-test="Post_para">{post.content}</p>

			<Link href={post.url} data-test="Post_link">
				View the full story
			</Link>
		</PostSC>
	) : null;

export default Post;
