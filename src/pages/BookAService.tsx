import Footer from "../components/footer.tsx";
import Navbar from "../components/navbar.tsx";
import React, { FormEvent, useState } from "react";
import FormTen from "../components/step-forms/form-ten.tsx";
import FormNine from "../components/step-forms/form-nine.tsx";
import FormEight from "../components/step-forms/form-eight.tsx";

export default function BookAService() {
	const [step, setStep] = useState(1);

	const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
	const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

	const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleNext();
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return (
					<FormEight
						onSubmits8={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 2:
				return (
					<FormNine
						onSubmits9={onSubmitHandler}
						backBtn={handleBack}
					/>
				);
			case 3:
				return <FormTen />;
		}
	};

	return (
		<>
			<Navbar />
			<div
				className="w-full min-h-[120vh] padding-x padding-y flex items-center justify-center pt-20 pb-60 xm:pb-20 sm:pb-20"
				style={{
					background:
						"linear-gradient(0deg, rgba(106,155,190,1) 0%, rgba(0,73,124,1) 30%, rgba(0,73,124,1) 50%, rgba(0,73,124,1) 70%, rgba(106,155,190,1) 100%)",
				}}>
				<div className="flex h-full items-center justify-center w-full py-24 xm:py-10 sm:py-10 xm:pt-28 sm:pt-28">
					{renderForm()}
				</div>
			</div>
			<Footer />
		</>
	);
}
