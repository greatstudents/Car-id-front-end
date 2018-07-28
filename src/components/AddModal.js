import Popup from "reactjs-popup";
import "../modal.css";
import React, {Component} from "react";
import {addData} from "../utils/car-api";


export class AddModal extends Component {

	render() {
        const { number, name, phone } = this.props;
		return (
			<Popup
				trigger={<button className="btn btn-lg btn-success"> 添加 </button>}
				modal
			>
				{close => (
					<div style={{fontSize: 12}}>
						<a className="close" onClick={close}>
							&times;
						</a>
						<div className="header"> 确定要添加吗? </div>
						<div className="content">
							<div>车牌: {number}</div>
							<div>名字: {name}</div>
						</div>
						<button
							className="btn btn-success"
							onClick={() => {
                                addData(number, name+' '+phone)
                                this.props.callback()
                                close()
							}}
						>
							添加
						</button>
					</div>
				)}
			</Popup>
		);
	}
}
