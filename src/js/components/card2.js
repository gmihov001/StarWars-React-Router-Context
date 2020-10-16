import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card2 = props => {
	console.log(props);
	var data;
	if (props.planet) {
		data = props.planet;
		console.log("Planet data", data);
	}
	if (props.character) {
		data = props.character;
		console.log("Character data", data);
	}
	let propArr = [];
	for (let property in data) {
		propArr.push([[property], data[property]]);
	}
	console.log(propArr);
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src="https://lumiere-a.akamaihd.net/v1/images/vicruls-sythe-main_e404bc44.jpeg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{propArr[0][1]}</h5>
				<p className="card-text">
					{propArr[4][0]}: {propArr[4][1]}
					<br />
					{propArr[6][0]}: {propArr[6][1]}
					<br />
					{propArr[7][0]}: {propArr[7][1]}
				</p>
				<div className="d-flex justify-content-between">
					<Link
						to={{
							pathname: `/details/${props.index + 1}`,
							state: {
								character: props.character
							}
						}}>
						<button href="#" className="btn btn-outline-dark learn-more">
							LEARN MORE
						</button>
					</Link>
					<Context.Consumer>
						{({ actions, store }) => {
							const isFav = store.favorites.find(f => f.name == props.character.name);
							console.log("isFav: ", isFav);
							return (
								<button
									type="button"
									className="btn btn-outline-warning"
									onClick={isFav ? null : () => actions.addToFavorites(props.character.name)}>
									{isFav ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
								</button>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
};

Card2.propTypes = {
	character: PropTypes.object,
	planet: PropTypes.object,
	name: PropTypes.string,
	species: PropTypes.array,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	index: PropTypes.number
};
