import React from "react";
import LoginForm from "../components/login-form.tsx";

export default function Login() {
	return (
		<div className="w-full h-screen flex items-center justify-center overflow-hidden bg-white absolute top-0 left-0 z-[2000]">
			<LoginForm />
		</div>
	);
}
