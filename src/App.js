import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

import ProtectiveArsenalContent from './Components/Pages/ProtectiveArsenal/ProtectiveArsenalContent';
import ProtectiveArsenalUpdate from './Components/Pages/ProtectiveArsenal/ProtectiveArsenalUpdate';
import ProtectiveArsenalView from './Components/Pages/ProtectiveArsenal/ProtectiveArsenalView';

import Page404 from './Components/Page404';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={() => <Home arg="12" />} />
				<Route path="/about" component={About} />

				<Route exact path="/protective-arsenal" component={ProtectiveArsenalContent} />
				<Route path="/protective-arsenal/edit/:id" component={ProtectiveArsenalUpdate} />
				<Route path="/protective-arsenal/view/:id" component={ProtectiveArsenalView} />

				<Route render={function () {
					return (
						<Page404 />
					);
				}} />
			</Switch>
		</Router>
	);
}

export default App;
