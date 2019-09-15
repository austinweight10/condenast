import React from "react";
import Link from "next/link";
import styled from "styled-components";

const PostsSC = styled.article`
	h2 {
		width: 100%;
		text-align: center;
		font-family: "Playfair Display", serif;
		text-transform: uppercase;
		letter-spacing: 1.8px;
		font-size: 22px;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		li {
			max-width: calc(100% - 20px);
			list-style: none;
			padding: 5px 10px;
		}
	}

	@media only screen and (min-width: 400px) {
		ul {
			li {
				max-width: calc(50% - 20px);
			}
		}
	}

	@media only screen and (min-width: 800px) {
		ul {
			li {
				max-width: calc(33.3% - 20px);
			}
		}
	}

	@media only screen and (min-width: 1000px) {
		ul {
			li {
				max-width: calc(25% - 20px);
			}
		}
	}
`;

const PostWrapper = styled.div`
	padding-bottom: 30px;
	div {
		height: 100px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h4 {
		width: 100%;
		text-align: center;
		font-family: "Playfair Display", serif;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		font-size: 12px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		margin-bottom: 8px;
	}
	span {
		letter-spacing: 1px;
		font-family: "Cantarell", sans-serif;
		cursor: pointer;
		font-size: 9px;
	}
	img {
		width: 100%;
	}
`;

const Posts = ({ posts, filter }) => {
	const filterQuery = filter.filter || "";
	const pageTitle = filter.name ? `currently viewing ${filter.name}` : "Top UK stories";

	return (
		<PostsSC data-test="Posts_post">
			<h2 data-test="Posts_title">{pageTitle}</h2>
			<ul>
				{posts.map(post => {
					return (
						<li key={post.title}>
							<Link data-test="Posts_Link" href={`/post/${post.title}?filter=${filterQuery}`}>
								<PostWrapper>
									<div>
										<img data-test="Posts_img" src={post.urlToImage} />
									</div>
									<h4 data-test="Posts_title">{post.title}</h4>
									<span data-test="Posts_name">{post.source.name}</span>
									<br />
									<span data-test="Posts_description">{post.description}</span>
								</PostWrapper>
							</Link>
						</li>
					);
				})}
			</ul>
		</PostsSC>
	);
};

export default Posts;
