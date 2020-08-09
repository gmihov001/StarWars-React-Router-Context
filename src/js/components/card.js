import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CharacterCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem" }}>
			<img
				src="https://lumiere-a.akamaihd.net/v1/images/vicruls-sythe-main_e404bc44.jpeg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>
				<p className="card-text">
					Gender: {props.character.gender}
					<br />
					Hair Color: {props.character.hair_color}
					<br />
					Eye-Color: {props.character.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link
						to={{
							pathname: `/details/${props.index + 1}`,
							state: {
								character: props.character
							}
						}}>
						<a href="#" className="btn  btn-outline-primary">
							Learn more!
						</a>
					</Link>
					{/* {const isFav = store.favorites.find( f => f.name ==
					props.name )}  */}
					<button
						type="button"
						className="btn btn-outline-warning"
						onClick={() => this.addToFavorites(props.name)}>
						{/* {isFav ? (
							<i className="fas fa-heart" />
						) : (
							<i className="far fa-heart" />
						)} */}
					</button>
					);
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object,
	name: PropTypes.string,
	species: PropTypes.array,
	gender: PropTypes.string,
	eye_color: PropTypes.string,
	hair_color: PropTypes.string,
	index: PropTypes.number
};
