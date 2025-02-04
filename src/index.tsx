import React from "react";
import App from "./App.tsx";
import "./styles/globals.css";
import ReactDOM from "react-dom/client";
import ToastProvider from "./provider/toast-provider.tsx";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<React.StrictMode>
			<Router>
				<ToastProvider />
				<App />
			</Router>
		</React.StrictMode>,
	);
} else {
	console.error("Failed to find the root element");
}
