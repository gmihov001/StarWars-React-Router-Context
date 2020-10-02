import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			showDropdown: false
		};
	}

	render() {
		let show = "";
		if (this.state.clickedDropDown) show = "show";
		return (
			<nav className="navbar navbar-light header d-flex justify-content-between bg-light">
				<Context.Consumer>
					{({ actions, store }) => (
						<div className="container">
							<Link className="navbar-brand text-white" to="/">
								<img
									src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/cfd241b0-85a3-4363-87b1-51c6732af3fd"
									height="100px;"
									width="auto;"
								/>
							</Link>
							<a className={"nav-item dropdown " + (this.state.showDropdown ? "show" : "")}>
								<button
									className="btn btn-primary nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded={this.state.clickedDropDown}
									onClick={() =>
										this.setState({
											clickedDropDown: !this.state.clickedDropDown
										})
									}>
									Favorites <span className="badge badge-secondary">{store.favorites.length}</span>
								</button>
								<div
									className={store.favorites.length > 0 ? "dropdown-menu " + show : "d-none"}
									aria-labelledby="navbarDropdown">
									{store.favorites.length > 0
										? store.favorites.map((elm, index) => (
												<li key={index} className="dropdown-item">
													<Link to={`/details/${index + 1}`}>{elm.name}</Link>
													<i
														className="fas fa-backspace"
														onClick={() => actions.deleteFromFavorites(elm)}
													/>
												</li>
										  ))
										: null}
								</div>
							</a>
						</div>
					)}
				</Context.Consumer>
			</nav>
		);
	}
}
Navbar.propTypes = {
	index: PropTypes.number
};
