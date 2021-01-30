import "./App.css";
import HomePage from "../src/Containers/HomePage";
import NavBar from "./Containers/NavBar";

function App() {
	return (
		<div className="container-fluid">
			<NavBar />
			<HomePage />
		</div>
	);
}

export default App;
