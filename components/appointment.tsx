"use client";
import {
	FormOne,
	FormTwo,
	FormThree,
	FormFour,
	FormFive,
	FormSix,
	FormSeven,
	FormEight,
	FormNine,
	FormTen,
} from "@/components";
import { FormEvent, useState } from "react";

export default function Appointment() {
	const [step, setStep] = useState(1);

	const handleNext = () => setStep((prev) => Math.min(prev + 1, 10));
	const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleNext();
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return <FormOne onSubmits1={onSubmitHandler} />;
			case 2:
				return <FormTwo onSubmits2={onSubmitHandler} />;
			case 3:
				return (
					<FormThree
						backBtn={handleBack}
						onSubmits3={onSubmitHandler}
					/>
				);
			case 4:
				return (
					<FormFour
						onSubmits4={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 5:
				return (
					<FormFive
						onSubmits5={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 6:
				return (
					<FormSix
						onSubmits6={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 7:
				return (
					<FormSeven
						onSubmits7={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 8:
				return (
					<FormEight
						onSubmits8={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 9:
				return (
					<FormNine
						onSubmits9={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 10:
				return <FormTen />;
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
