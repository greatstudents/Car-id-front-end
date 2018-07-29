import React, {Component} from "react";
import {Link} from "react-router";
import Nav from "./Nav";
import {getData} from "../utils/car-api";

class Search extends Component {
	constructor() {
		super();
		this.state = {
			number: "",
			name: ""
		};
	}

	handleChange(event) {
		this.setState({number: event.target.value, name: ""});
	}

	getCar(e) {
		getData(this.state.number).then(value => {
			console.log(value);
			this.setState({name: value, number: ""});
		});
		e.preventDefault();
	}

	render() {
		const {name} = this.state;

		return (
			<div>
				<Nav />
				<h3 className="text-center" style={{fontSize: 50}}>
					车牌查询
				</h3>
				<hr />
				<div className="col-sm-12">
					<div className="jumbotron text-center">
						<form onSubmit={this.getCar.bind(this)}>
							<label style={{fontSize: 30}}>
								车牌
								<input
									// style={{fontSize:60}}
									type="text"
									name="name"
									value={this.state.number}
									onChange={this.handleChange.bind(this)}
								/>
							</label>

								<button
									type="submit"
									className="btn-success"
									style={{fontSize: 25}}
								>
									查询
								</button>

						</form>
						<div>
							<h2>{name}</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
