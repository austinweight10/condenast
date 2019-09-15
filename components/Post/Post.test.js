import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Post from "./";

Enzyme.configure({ adapter: new Adapter() });

const postData = {
	source: { id: "bbc-news", name: "BBC News" },
	author: "https://www.facebook.com/bbcnews",
	title: "Channel migrants: Border Force intercepts boats - BBC News",
	description: "Boats carrying suspected migrants are being dealt with off the Kent coast.",
	url: "https://www.bbc.co.uk/news/uk-england-kent-49707720",
	urlToImage:
		"https://ichef.bbci.co.uk/news/1024/branded_news/37C9/production/_108818241_tv056517931.jpg",
	publishedAt: "2019-09-15T14:25:54Z",
	content:
		"Image copyrightPAImage caption\r\n A Border Force cutter left the Port of Dover on Sunday morning\r\nBoats carrying about a dozen migrants have been intercepted off the Kent coast. \r\nAt least two Border Force vessels pulled into Dover earlier carrying migrants in… [+1882 chars]"
};

describe("Post", () => {
	const wrapper = shallow(<Post post={postData} />);
	it("Post contains title", () => {
		expect(wrapper.find('[data-test="Post_title"]').text()).toBe(
			"Channel migrants: Border Force intercepts boats - BBC News"
		);
	});
	it("Post contains source", () => {
		expect(wrapper.find('[data-test="Post_source"]').text()).toBe("Source: BBC News");
	});
	it("Post contains author", () => {
		expect(wrapper.find('[data-test="Post_author"]').text()).toBe(
			"Author: https://www.facebook.com/bbcnews"
		);
	});
	it("Post contains intro", () => {
		expect(wrapper.find('[data-test="Post_intro"]').text()).toBe(
			"Into: Boats carrying suspected migrants are being dealt with off the Kent coast."
		);
	});
	it("Post contains img", () => {
		expect(wrapper.find('[data-test="Post_img"]').prop("src")).toBe(
			"https://ichef.bbci.co.uk/news/1024/branded_news/37C9/production/_108818241_tv056517931.jpg"
		);
	});
	it("Post contains para", () => {
		expect(wrapper.find('[data-test="Post_para"]').length).toBe(1);
	});
	it("Post contains link", () => {
		expect(wrapper.find('[data-test="Post_link"]').length).toBe(1);
	});
});
