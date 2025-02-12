import React from "react";
import Form from "./pages/Form.tsx";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import Login from "./pages/Login.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Thankyou from "./pages/Thankyou.tsx";
import Register from "./pages/Register.tsx";
import Services from "./pages/Services.tsx";
import Products from "./pages/Products.tsx";
import { Routes, Route } from "react-router-dom";
import RequestADemo from "./pages/RequestADemo.tsx";
import ProductDetail from "./pages/product-detail/ProductDetail.tsx";
import ServicesDetail from "./pages/service-detail/ServicesDetail.tsx";
import RequestADemoServices from "./pages/RequestADemoServices.tsx";
import BookAService from "./pages/BookAService.tsx";

export default function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/contact-us"
					element={<Contact />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/cart"
					element={<Cart />}
				/>
				<Route
					path="/thankyou"
					element={<Thankyou />}
				/>
				<Route
					path="/services/service-detail/:id"
					element={<ServicesDetail />}
				/>
				<Route
					path="/products/product-detail/:id"
					element={<ProductDetail />}
				/>
				<Route
					path="/book-now"
					element={<RequestADemo />}
				/>
				<Route
					path="/book-now/services"
					element={<RequestADemoServices />}
				/>
				<Route
					path="/book-now/services/:id"
					element={<Form />}
				/>
				<Route
					path="/book-now/services/:id/book-a-service"
					element={<BookAService />}
				/>
			</Routes>
		</>
	);
}
