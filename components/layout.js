import React, { Fragment } from "react";

const Layout = ({ children }) => (
	<Fragment>
		<link
			href="https://fonts.googleapis.com/css?family=Cantarell:400i|Playfair+Display&display=swap"
			rel="stylesheet"
		/>
		{children}
	</Fragment>
);

export default Layout;
