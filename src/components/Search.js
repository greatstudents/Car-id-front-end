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
				<h3 className="text-center">车牌查询</h3>
				<hr />
				<div className="col-sm-12">
					<div className="jumbotron text-center">
						<form onSubmit={this.getCar.bind(this)}>
							<label>
								车牌:
								<input
									type="text"
									name="name"
									value={this.state.number}
									onChange={this.handleChange.bind(this)}
								/>
							</label>
							<button type="submit" className="btn btn-success">
								查询
							</button>
						</form>
						<div>
							<label>{name}</label>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
