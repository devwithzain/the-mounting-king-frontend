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
import Image from "next/image";
import { FormEvent, useState } from "react";
import { heroCloud } from "@/public";

export default function Appointment() {
	const [formData, setFormData] = useState({
		formThree: {},
		formFour: {},
	});

	const [step, setStep] = useState(1);

	const handleNext = () => setStep((prev) => Math.min(prev + 1, 10));
	const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(`Step ${step} submitted`);
		handleNext();
	};

	const renderForm = () => {
		const formProps = { formData, setFormData }; // Shared props for forms
		switch (step) {
			case 1:
				return (
					<FormOne
						onSubmits1={onSubmitHandler}
						{...formProps}
					/>
				);
			case 2:
				return (
					<FormTwo
						onSubmits2={onSubmitHandler}
						{...formProps}
					/>
				);
			case 3:
				return (
					<FormThree
						onSubmits3={onSubmitHandler}
						{...formProps}
					/>
				);
			case 4:
				return (
					<FormFour
						onSubmits4={onSubmitHandler}
						{...formProps}
					/>
				);
			case 5:
				return (
					<FormFive
						onSubmits5={onSubmitHandler}
						{...formProps}
					/>
				);
			case 6:
				return (
					<FormSix
						onSubmits6={onSubmitHandler}
						{...formProps}
					/>
				);
			case 7:
				return (
					<FormSeven
						onSubmits7={onSubmitHandler}
						{...formProps}
					/>
				);
			case 8:
				return (
					<FormEight
						onSubmits8={onSubmitHandler}
						{...formProps}
					/>
				);
			case 9:
				return (
					<FormNine
						onSubmits9={onSubmitHandler}
						{...formProps}
					/>
				);
			case 10:
				return (
					<FormTen
						onSubmits10={onSubmitHandler}
						{...formProps}
					/>
				);
			default:
				return (
					<FormOne
						onSubmits1={onSubmitHandler}
						{...formProps}
					/>
				);
		}
	};

	return (
		<div className="relative w-full h-screen">
			<div className="absolute top-0 left-0 w-full h-full -z-10">
				<Image
					src={heroCloud}
					alt="cloud"
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="flex flex-col items-center justify-center w-full h-full gap-10">
				{renderForm()}
				<div className="flex justify-between w-full max-w-md mt-5">
					<button
						onClick={handleBack}
						disabled={step === 1}
						className={`px-6 py-3 text-lg font-medium rounded-lg ${
							step === 1
								? "bg-gray-300 text-gray-500 cursor-not-allowed"
								: "bg-black text-white"
						}`}>
						Back
					</button>
					<button
						onClick={handleNext}
						disabled={step === 10}
						className={`px-6 py-3 text-lg font-medium rounded-lg ${
							step === 10
								? "bg-gray-300 text-gray-500 cursor-not-allowed"
								: "bg-[#F99A03] text-white"
						}`}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
