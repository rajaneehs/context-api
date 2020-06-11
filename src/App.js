import React from "react";

import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";

class App extends React.Component {
	render() {
		return (
			<div>
				<UserProvider value="Rajaneesh">
					<ComponentC />
				</UserProvider>
			</div>
		);
	}
}

export default App;
