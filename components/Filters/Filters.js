import React from "react";
import styled from "styled-components";
import axios from "axios";
import { filterList } from "../../utils/filterList";

const FiltersSC = styled.nav`
	border-top: 1px solid grey;
	border-bottom: 1px solid grey;
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		li {
			list-style: none;
			padding: 5px 10px;
		}
	}
`;

const FilterItemSC = styled.button`
	border: none;
	background: none;
	text-transform: uppercase;
	color: ${props => (props.selected ? "blcak" : "green")};
	letter-spacing: 1.8px;
	font-family: "Cantarell", sans-serif;
	cursor: pointer;
`;

const Filters = ({ setPosts, filter: { setFilter, filter } }) => {
	const applyFilter = selectedFilter => async () => {
		try {
			const response = await axios({
				method: "post",
				url: "/api/everything",
				data: {
					filter: selectedFilter.filter,
					language: "en"
				}
			});
			setPosts(response.data);
			setFilter(selectedFilter);
		} catch (error) {
			// todo error handling
			console.error(error);
		}
	};

	return (
		<FiltersSC>
			<ul>
				{filterList.map(filterItem => {
					return (
						<li data-test="Filters_filter" key={filterItem.name}>
							<FilterItemSC
								onClick={applyFilter(filterItem)}
								selected={filter.filter === filterItem.filter}
							>
								{filterItem.name}
							</FilterItemSC>
						</li>
					);
				})}
			</ul>
		</FiltersSC>
	);
};

export default Filters;
