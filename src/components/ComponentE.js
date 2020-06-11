import React from "react";
import ComponentF from "./ComponentF";
import UserContext from "./userContext";

class ComponentE extends React.Component {
	render() {
		return (
			<div>
				Component E context {this.context}
				<ComponentF />
			</div>
		);
	}
}

ComponentE.contextType = UserContext;

export default ComponentE;