import React, {Component} from "react";
import {Link} from "react-router";
import Nav from "./Nav";
import {DeleteModal} from "./DeleteModal";

class Delete extends Component {
	constructor() {
		super();
		this.state = {name: "", number: "", phone: "", password: ""};
	}

	handleNumberChange(event) {
		this.setState({number: event.target.value});
	}

	handlePasswordChange(event) {
		this.setState({password: event.target.value});
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
				<DeleteModal
					number={this.state.number}
                    callback={this.clear.bind(this)}
				/>
			);
		} else {
			mo = <h3>请输入密码</h3>;
		}
		return (
			<div>
				<Nav />
				<h3 className="text-center">车牌删除</h3>

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

export default Delete;
