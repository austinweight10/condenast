import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Posts from "./";

Enzyme.configure({ adapter: new Adapter() });

const postsData = [
	{
		source: { id: "mirror", name: "Mirror" },
		author: "Irishmirror.ie",
		title:
			"Arsenal confirmed lineup vs Watford as Mesut Ozil and Dani Ceballos both start - Irish Mirror",
		description:
			"Arsenal return to action at Vicarage Road, taking on a Watford side under new management",
		url:
			"https://www.mirror.co.uk/sport/football/news/arsenal-predicted-lineup-vs-watford-20067843",
		urlToImage:
			"https://i2-prod.mirror.co.uk/incoming/article20062200.ece/ALTERNATES/s1200/0_Arsenal-Training-Session.jpg",
		publishedAt: "2019-09-15T14:34:00Z",
		content:
			"Arsenal are without Alexandre Lacazette for the trip to Vicarage Road due to an ankle injury, but Mesut Ozil returns to the starting lineup. \r\n Lacazette's absence means Pierre-Emerick Aubameyang will start at centre-forward against Watford , rather than from… [+1886 chars]"
	},
	{
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
	},
	{
		source: { id: "daily-mail", name: "Daily Mail" },
		author: "By Andrew Bullock For Mailonline",
		title:
			"Strictly's Shirley Ballas may remove her breast implants after a cancer scare - Daily Mail",
		description:
			"Head Judge on Strictly Come Dancing Shirley Ballas as revealed she is considering removing her breast implants.",
		url:
			"https://www.dailymail.co.uk/tvshowbiz/article-7465997/Strictlys-Shirley-Ballas-remove-breast-implants-cancer-scare.html",
		urlToImage:
			"https://i.dailymail.co.uk/1s/2019/09/15/15/18502518-0-image-a-58_1568557065948.jpg",
		publishedAt: "2019-09-15T13:22:43Z",
		content:
			"Head Judge on Strictly Come Dancing Shirley Ballas as revealed she is considering removing her breast implants.\r\nThe 59-year-old ballroom pro revealed to The Sunday Times this week that she suffered a cancer scare as well as learning that there was a history … [+5114 chars]"
	},
	{
		source: { id: null, name: "Sportinglife.com" },
		author: null,
		title:
			"England v Australia 5th Test day four lunch report: Hosts need seven more wickets - Sportinglife.com",
		description:
			"England finally dismissed Steve Smith for under 50 as they pressed towards an Ashes-levelling victory in the final Test at The Oval.",
		url: "https://www.sportinglife.com/cricket/news/smith-falls-as-england-sense-victory/171482",
		urlToImage:
			"https://www.sportinglife.com/images/news/original/GettyImages-1174817719-f6482668-e1c9-4eb2-a973-349d036e82e0.jpg",
		publishedAt: "2019-09-15T12:57:05Z",
		content:
			"Scorecard - England lead by 382\r\nEngland first Innings: 294 all out (Buttler 70, Root 57; Marsh 5-45, Cummins 3-84)\r\nAustralia first Innings: 225 all out (Smith 80; Archer 6-62)\r\nEngland second Innings: 329 all out (Denly 94, Stokes 67; Lyon 4-69)\r\nAustralia … [+3229 chars]"
	},
	{
		source: { id: null, name: "Thesun.co.uk" },
		author: "Dave Fraser",
		title:
			"Tyson Fury shares grisly before and after pics of brutal cut after getting stitches at hospital following - The Sun",
		description: "",
		url:
			"http://www.thesun.co.uk/sport/boxing/9932036/fury-pictures-horror-cut-eye-stitches-surgery/",
		urlToImage:
			"https://www.thesun.co.uk/wp-content/uploads/2019/09/SPORT-PREVIEW-TYSON-FURY-EYE.jpg?strip=all&quality=100&w=620&h=413&crop=1",
		publishedAt: "2019-09-15T11:31:50Z",
		content:
			"TYSON FURY has shared the grisly before and after pictures of the horror cut above his eye after getting stitches at hospital following his bloody win over Otto Wallin.\r\nThe Gypsy King, 31, battled valiantly to beat the Swede southpaw in a unanimous points vi… [+2380 chars]"
	},
	{
		source: { id: null, name: "Sky.com" },
		author: "Sky",
		title: "China bans drones and pigeons in Beijing ahead of 70th anniversary - Sky News",
		description:
			"The move comes as rehearsals for an enormous military parade and celebration to mark 70 years of communist rule are carried out.",
		url:
			"https://news.sky.com/story/china-bans-drones-and-pigeons-in-beijing-ahead-of-70th-anniversary-11810281",
		urlToImage:
			"https://e3.365dm.com/19/09/1600x900/skynews-pigeon-bird_4775138.jpg?20190915105045",
		publishedAt: "2019-09-15T11:27:40Z",
		content: null
	},
	{
		source: { id: "metro", name: "Metro" },
		author: "Zoe Drewett",
		title: "Murder arrest after man, 29, stabbed to death near inflatable fun fair - Metro.co.uk",
		description:
			"Witnesses chased the suspect and held him down until police arrived at the scene in Edmonton, north London.",
		url:
			"https://metro.co.uk/2019/09/15/murder-arrest-man-29-stabbed-death-near-inflatable-fun-fair-10746035/",
		urlToImage:
			"https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/09/PRI_84894698_1568547177.jpg?quality=90&strip=all&w=1200&h=630&crop=1&zoom=1&ssl=1",
		publishedAt: "2019-09-15T11:12:00Z",
		content:
			"A police tent at the scene of the stabbing next to an inflatable in Jubilee Park, Edmonton, North London (Picture: LNP)\r\nA man was stabbed to death in the street next to a private party and inflatable fun fair, becoming the 109th person to be killed in the ca… [+3226 chars]"
	},
	{
		source: { id: null, name: "Thesun.co.uk" },
		author: "Tariq Tahir",
		title:
			"Cops find 44 mutilated corpses stuffed in 120 bin bags and dumped in well where Mexican drug cartels carry - The Sun",
		description: "",
		url: "http://www.thesun.co.uk/news/9931468/corpses-well-mexican-drug-cartels-executions/",
		urlToImage:
			"https://www.thesun.co.uk/wp-content/uploads/2019/09/MB-COMP-MEXICO.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
		publishedAt: "2019-09-15T10:30:00Z",
		content:
			"THE bodies of 44 missing people have been found buried in a well in an area of Mexico notorious for brutal drug cartel executions.\r\nThe grim discovery was made after locals in Jalisco state complained of a foul smell and when the well was dug up, the remains … [+4516 chars]"
	},
	{
		source: { id: "google-news", name: "Google News" },
		author: null,
		title:
			"Crowds cheer on Gareth Thomas as he takes part in Ironman hours after revealing he is HIV positive - Wales Online",
		description: null,
		url:
			"https://news.google.com/__i/rss/rd/articles/CBMiV2h0dHBzOi8vd3d3LndhbGVzb25saW5lLmNvLnVrL25ld3Mvd2FsZXMtbmV3cy9jcm93ZHMtY2hlZXItZ2FyZXRoLXRob21hcy10YWtlcy0xNjkyMTcxNdIBW2h0dHBzOi8vd3d3LndhbGVzb25saW5lLmNvLnVrL25ld3Mvd2FsZXMtbmV3cy9jcm93ZHMtY2hlZXItZ2FyZXRoLXRob21hcy10YWtlcy0xNjkyMTcxNS5hbXA?oc=5",
		urlToImage: null,
		publishedAt: "2019-09-15T10:14:00Z",
		content: null
	},
	{
		source: { id: null, name: "Goss.ie" },
		author: null,
		title: "Maura Higgins says she blamed herself for tragic death of best friend - Goss.ie",
		description: '"It took me a long, long time to be okay again"',
		url:
			"http://goss.ie/featured/maura-higgins-says-she-blamed-herself-for-tragic-death-of-best-friend-185151",
		urlToImage: "http://goss.ie/wp-content/uploads/2019/06/love_island_sr5_ep10_03.jpg",
		publishedAt: "2019-09-15T10:10:48Z",
		content:
			"Maura Higgins has admitted that she blamed herself for the tragic death of her best friend in 2017.\r\nThe Love Island star explained how her friend Andrew Ronan lost his life in a motorbike accident.\r\n“He had finished work early and and he asked me to go to di… [+734 chars]"
	},
	{
		source: { id: null, name: "Thesun.co.uk" },
		author: "Jennifer Awford",
		title:
			"Giant asteroid twice the size of the Empire State Building flies past Earth at 14,400mph - The Sun",
		description: "",
		url: "http://www.thesun.co.uk/tech/9931398/giant-asteroid-empire-state-earth/",
		urlToImage:
			"https://www.thesun.co.uk/wp-content/uploads/2019/09/unnamed-2-2.jpg?strip=all&quality=100&w=959&h=777&crop=1",
		publishedAt: "2019-09-15T09:16:00Z",
		content:
			"A HUGE asteroid twice the size of the Empire State Building skimmed the Earth last night at 14,400mph.\r\nAsteroid 2000 QW7 whizzed past the planet just before midnight - but was at a safe distance of 3.3million miles.\r\n Asteroid that is twice the height of the… [+5837 chars]"
	},
	{
		source: { id: null, name: "Edp24.co.uk" },
		author: "Ruth Lawes",
		title:
			"Oasis star Noel Gallagher needs to rethink after Norwich City defeats Man City | Latest Norfolk and Suffolk News - Eastern Daily Press",
		description:
			"Popstar Noel Gallagher might want to eat his words after Norwich City’s stunning victory.",
		url:
			"https://www.edp24.co.uk/news/oasis-noel-gallagher-norwich-city-man-city-football-1-6270559",
		urlToImage: "https://www.edp24.co.uk/polopoly_fs/1.6270560!/image/image.jpg",
		publishedAt: "2019-09-15T09:01:00Z",
		content:
			'PUBLISHED: 10:01 15 September 2019 | UPDATED: 10:01 15 September 2019\r\nRuth Lawes\r\nNoel Gallagher dedicated "Stop Crying Your Heart Out" to Norwich city fans. Photo: Lee Blanchflower\r\nBlanc Creative 2019\r\nPopstar Noel Gallagher might want to eat his words aft… [+800 chars]'
	},
	{
		source: { id: "financial-times", name: "Financial Times" },
		author: "Caroline Binham",
		title: "Central banks to grill Facebook over Libra - Financial Times",
		description: null,
		url: "https://www.ft.com/content/11bfda8c-d6fb-11e9-8f9b-77216ebe1f17",
		urlToImage: "https://www.ft.com/__assets/creatives/brand-ft/icons/v3/open-graph.png",
		publishedAt: "2019-09-15T08:59:01Z",
		content:
			"Expert insights, analysis and smart data help you cut through the noise to spot trends,\r\nrisks and opportunities.\r\nJoin over 300,000 Finance professionals who already subscribe to the FT."
	},
	{
		source: { id: null, name: "Sky.com" },
		author: "Sky",
		title: "'We are prepared for a no-deal Brexit' - Sky News",
		description: "",
		url: "https://news.sky.com/video/we-are-prepared-for-brexit-11810246",
		urlToImage:
			"https://e3.365dm.com/19/09/1600x900/683f1dc1cb31e450f486e9c9067c1df6e2788dee2baae622bb51d1f2421bba39_4775112.jpg?20190915100625",
		publishedAt: "2019-09-15T08:49:36Z",
		content: null
	},
	{
		source: { id: "the-telegraph", name: "The Telegraph" },
		author: null,
		title:
			"Surgeons are retiring early due to back problems brought on by modern surgical techniques, experts warn - The Telegraph",
		description:
			"Surgeons are retiring early because of back problems caused by modern surgical techniques, experts have warned.",
		url:
			"https://www.telegraph.co.uk/news/2019/09/15/surgeons-retiring-early-due-back-problems-brought-modern-surgical/",
		urlToImage:
			"https://www.telegraph.co.uk/content/dam/news/2019/02/20/TELEMMGLPICT000140134734-xlarge_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
		publishedAt: "2019-09-15T05:00:00Z",
		content:
			"It is the latest in a series of threats to the number of experienced doctors working in NHS. \r\nEarlier this year, three quarters of hospital consultants revealed they had cut or would cut their hours to avoid being hit with large tax bills due to problems wit… [+2381 chars]"
	},
	{
		source: { id: "bbc-news", name: "BBC News" },
		author: "BBC News",
		title: "'My body won't let me have sex' - BBC News",
		description:
			"Vaginismus is a psychosexual disorder that can destroy people's lives - so why does no one talk about it?",
		url:
			"https://www.bbc.co.uk/news/av/world-europe-49695670/vaginismus-my-body-won-t-let-me-have-sex",
		urlToImage:
			"https://ichef.bbci.co.uk/news/1024/branded_news/115B2/production/_108809017_p07ncf4z.jpg",
		publishedAt: "2019-09-14T23:54:14Z",
		content: null
	},
	{
		source: { id: null, name: "Thesun.co.uk" },
		author: "Phil Dampier",
		title:
			"Meghan Markle owes success of Smart Works charity fashion launch to sister-in-law Kate Middleton - The Sun",
		description: "",
		url: "http://www.thesun.co.uk/fabulous/9930192/meghan-markle-fashion-launch-kate-middleton/",
		urlToImage:
			"https://i2.wp.com/www.thesun.co.uk/wp-content/uploads/2019/09/NINTCHDBPICT000521385611.jpg?crop=0px%2C127px%2C2554px%2C1702px&resize=1200%2C800&ssl=1",
		publishedAt: "2019-09-14T23:48:00Z",
		content:
			"BEAMING in a smart white shirt and black trousers, Meghans slickly managed return to work was a welcome contrast to the PR disasters that have lately been dogging her and Prince Harry.\r\nAnd many think she has sister-in-law Kate to thank as she looks to bury t… [+6454 chars]"
	},
	{
		source: { id: null, name: "Thetimes.co.uk" },
		author: null,
		title: "Jo Swinson interview: could the Lib Dem leader be prime minister? - The Times",
		description:
			"Jo Swinson arrives fresh from her photoshoot wearing bright canary-yellow shoes. There is something so very Liberal Democrat about Swinson. No bad thing, you might say, for the brand-new leader of...",
		url:
			"https://www.thetimes.co.uk/article/jo-swinson-interview-could-the-lib-dem-leader-be-prime-minister-js9n5fhd2",
		urlToImage:
			"http://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fbba7e444-cf2c-11e9-8748-e9a1563a9aa9.jpg?crop=1600%2C900%2C0%2C0&resize=685",
		publishedAt: "2019-09-14T23:01:00Z",
		content:
			"Jo Swinson arrives fresh from her photoshoot wearing bright canary-yellow shoes. There is something so very Liberal Democrat about Swinson. No bad thing, you might say, for the brand-new leader of that party, but I wonder. Right now, with alliances breaking d… [+478 chars]"
	},
	{
		source: { id: null, name: "Thetimes.co.uk" },
		author: null,
		title: "'Watered‑down' Northern Ireland backstop raises hopes of deal - The Times",
		description:
			"When Michel Barnier, the EU’s chief Brexit negotiator, briefed leaders of the European parliament last week, his comments betrayed the weariness of someone who has spent a good part of the past few...",
		url:
			"https://www.thetimes.co.uk/article/watered-down-backstop-gives-hope-of-no-deal-breakthrough-hd5mg9sxz",
		urlToImage:
			"http://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Ffe4caf3a-d712-11e9-b098-ed106f659f8a.jpg?crop=2667%2C1500%2C0%2C0&resize=685",
		publishedAt: "2019-09-14T23:01:00Z",
		content:
			"When Michel Barnier, the EUs chief Brexit negotiator, briefed leaders of the European parliament last week, his comments betrayed the weariness of someone who has spent a good part of the past few months trying in vain to square a circle.\r\nThe risk of a no-de… [+486 chars]"
	},
	{
		source: { id: null, name: "Thetimes.co.uk" },
		author: null,
		title:
			"Pro-democracy protests split Hong Kong as rumours and rows ruin autumn festival - The Times",
		description:
			"Mid-autumn is one of the most important Chinese festivals, but this weekend, after more than three months of protests in Hong Kong, the traditional family gatherings are different. Restaurants...",
		url:
			"https://www.thetimes.co.uk/article/pro-democracy-protests-split-hong-kong-as-rumours-and-rows-ruin-autumn-festival-3ffkntrbr",
		urlToImage:
			"http://www.thetimes.co.uk/imageserver/image/methode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F63f42824-d711-11e9-b098-ed106f659f8a.jpg?crop=2667%2C1500%2C0%2C0&resize=685",
		publishedAt: "2019-09-14T23:01:00Z",
		content:
			"Mid-autumn is one of the most important Chinese festivals, but this weekend, after more than three months of protests in Hong Kong, the traditional family gatherings are different. Restaurants normally filled with big parties of relatives have empty tables.\r\n… [+534 chars]"
	}
];

const filterData = "";

describe("Posts", () => {
	const wrapper = shallow(<Posts posts={postsData} filter={filterData} />);
	it("Posts has x posts", () => {
		expect(wrapper.find('[data-test="Posts_post"]').length).toBe(1);
	});
	it("Posts first title to be", () => {
		expect(
			wrapper
				.find('[data-test="Posts_title"]')
				.at(0)
				.text()
		).toBe("Top UK stories");
	});
	it("Posts first link to be", () => {
		expect(wrapper.find('[data-test="Posts_Link"]').at(0).length).toBe(1);
	});
	it("Posts first img to be", () => {
		expect(
			wrapper
				.find('[data-test="Posts_img"]')
				.at(0)
				.prop("src")
		).toBe(
			"https://i2-prod.mirror.co.uk/incoming/article20062200.ece/ALTERNATES/s1200/0_Arsenal-Training-Session.jpg"
		);
	});
	it("Posts first name to be", () => {
		expect(
			wrapper
				.find('[data-test="Posts_name"]')
				.at(0)
				.text()
		).toBe("Mirror");
	});
	it("Posts first description to be", () => {
		expect(
			wrapper
				.find('[data-test="Posts_description"]')
				.at(0)
				.text()
		).toBe(
			"Arsenal return to action at Vicarage Road, taking on a Watford side under new management"
		);
	});
});
