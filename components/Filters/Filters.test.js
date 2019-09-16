import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filters from "./";

Enzyme.configure({ adapter: new Adapter() });

const setPostsData = jest.fn();
const filterData = "";
const setFilterData = jest.fn();

describe("Post", () => {
	const wrapper = shallow(
		<Filters setPosts={setPostsData} filter={{ filter: filterData, setFilter: setFilterData }} />
	);
	it("Post contains title", () => {
		expect(wrapper.find('[data-test="Filters_filter"]').length).toBe(15);
	});
});
