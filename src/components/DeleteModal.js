import Popup from "reactjs-popup";
import "../modal.css";
import React, {Component} from "react";
import {deleteData} from "../utils/car-api";


export class DeleteModal extends Component {

	render() {
        const { number } = this.props;
		return (
			<Popup
				trigger={<button className="btn btn-lg btn-danger"> 删除 </button>}
				modal
			>
				{close => (
					<div style={{fontSize: 12}}>
						<a className="close" onClick={close}>
							&times;
						</a>
						<div className="header"> 确定要删除吗? </div>
						<div className="content">
							<div>车牌: {number}</div>
						</div>
						<button
							className="btn btn-danger"
							onClick={() => {
                                deleteData(number)
								this.props.callback()
								close()
							}}
						>
							删除
						</button>
					</div>
				)}
			</Popup>
		);
	}
}
