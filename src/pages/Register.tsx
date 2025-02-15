import React from "react";
import RegisterForm from "../components/register-form.tsx";

export default function Register() {
	return (
		<div className="w-full h-screen flex items-center justify-center overflow-hidden bg-white absolute top-0 left-0 z-[2000] formBg">
			<RegisterForm />
		</div>
	);
}
