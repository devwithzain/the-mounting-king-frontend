"use client";
import { FormOne } from "@/components";
import { FormEvent, useState } from "react";

export default function Appointment() {
	const [step, setStep] = useState(1);

	const handleNext = () => setStep((prev) => Math.min(prev + 1, 10));

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleNext();
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return <FormOne onSubmits1={onSubmitHandler} />;
		}
	};

	return (
		<div
			className="w-full min-h-screen py-80 padding-x flex items-center justify-center"
			style={{
				background:
					"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
			}}>
			<div className="flex items-center justify-center w-full h-full">
				{renderForm()}
			</div>
		</div>
	);
}
