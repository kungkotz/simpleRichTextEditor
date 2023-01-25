import { ReactQueryDevtools } from "react-query/devtools";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import "./assets/scss/App.scss";
import TextEditor from "./components/TextEditor";

const App = () => {
	return (
		<div id="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>

			<ReactQueryDevtools position="bottom-left" />
		</div>
	);
};

export default App;
