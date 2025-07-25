import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./Card";

//create your first component
const Home = ({digito}) => {
	return (
		<div className="container mt-5 text-center">
			<h1>Contador</h1>

		<div className="text-center d-flex justify-content-center">
			<Card numero= {Math.floor((digito % 1000000) / 100000)}/>
			<Card numero= {Math.floor((digito % 100000) / 10000)}/>
			<Card numero= {Math.floor((digito % 10000) / 1000)}/>
			<Card numero= {Math.floor((digito % 1000) / 100)}/>
			<Card numero= {Math.floor((digito % 100) / 10)}/>
			<Card numero= {Math.floor(digito % 10)}/>
		</div>
		</div>
	);
};

export default Home;