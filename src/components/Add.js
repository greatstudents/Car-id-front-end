import React, {Component} from "react";
import {Link} from "react-router";
import Nav from "./Nav";
import {AddModal} from "./AddModal";
import {addData} from "../utils/car-api";

class Add extends Component {
	constructor() {
		super();
		this.state = {name: "", number: "", phone: "", password: ""};
	}

	handleNameChange(event) {
		this.setState({name: event.target.value});
	}

	handleNumberChange(event) {
		this.setState({number: event.target.value});
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
	}

	handlePhoneChange(event) {
		this.setState({phone: event.target.value});
	}

    clear(){
        this.setState({
            password:''
        });
    }


	render() {
		const {password} = this.state;
        let mo;
		if (password == "0") {
			mo = (
				<AddModal
					number={this.state.number}
					name={this.state.name}
					phone={this.state.phone}
                    callback={this.clear.bind(this)}
				/>
			);
		} else {
			mo = <h3>请输入密码</h3>;
		}
		return (
			<div>
				<Nav />
				<h3 className="text-center">车牌添加</h3>

				<hr />
				<div className="col-sm-12">
					<div className="jumbotron text-center">
						<div>
							<label>
								车牌:
								<input
									value={this.state.number}
									onChange={this.handleNumberChange.bind(this)}
								/>
							</label>
						</div>
						<div>
							<label>
								名字:
								<input
									value={this.state.name}
									onChange={this.handleNameChange.bind(this)}
								/>
							</label>
						</div>
						<div>
							<label>
								电话:
								<input
									value={this.state.phone}
									onChange={this.handlePhoneChange.bind(this)}
								/>
							</label>
						</div>
						<div>
							<label>
								密码:
								<input
									value={this.state.password}
									onChange={this.handlePasswordChange.bind(this)}
								/>
							</label>
						</div>
						{mo}
						<div />
					</div>
				</div>
			</div>
		);
	}
}

export default Add;
