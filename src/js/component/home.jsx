import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./cards.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import {Navbar} from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
		<Navbar />
		<Jumbotron />
		<Card />
		<Card />
		<Card />
		<Card />
		</React.Fragment>
	);
};

export default Home;
