import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Details } from "./views/details";
import { PlanetDetails } from "./views/planet_details";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

//create your first component
class Layout extends React.Component {
	constructor() {
		super();
		this.basename = process.env.BASENAME || "";
		this.state = {};
	}

	componentDidMount = () => {
		fetch("https://swapi.dev/api/people/?format=json")
			.then(res => res.json())
			.then(response => {
				if (typeof response === typeof {}) {
					this.setState({ characters: response.results });
				} else {
					this.setState({ characters: [] });
				}
			})
			.catch(error => console.error("Error:", error));

		fetch("https://swapi.dev/api/planets/?format=json")
			.then(res => res.json())
			.then(response => {
				console.log("Success:", typeof response);
				//console.log(response);
				if (typeof response === typeof {}) {
					this.setState({ planets: response.results });
				} else {
					this.setState({ planets: [] });
				}
			})

			.catch(error => console.error("Error:", error));
	};

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={this.basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/demo">
								<Demo />
							</Route>
							<Route exact path="/details/:id">
								<Details />
							</Route>
							<Route exact path="/planet_details">
								<PlanetDetails />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
