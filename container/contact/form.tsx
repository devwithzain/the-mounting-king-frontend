"use client";
import React, { useState } from "react";
import Image from "next/image";
import { arrowRight, heroCloud } from "@/public";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		mobile_number: "",
		postcode: "",
		tv_size: "",
		special_request: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("http://127.0.0.1:8000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			console.log("first", response);
			if (!response.ok) {
				throw new Error("Something went wrong!");
			}

			const result = await response.json();
			alert(result.message);
			setFormData({
				name: "",
				mobile_number: "",
				postcode: "",
				tv_size: "",
				special_request: "",
			});
		} catch (error) {
			alert("Failed to submit the form. Please try again.");
			console.error(error);
		}
	};

	return (
		<div className="w-full py-80 relative bg-gradient-to-b from-[#6A9BBE] via-[#00497C] to-[#6A9BBE]">
			<div className="absolute -top-60">
				<Image
					alt="heroCloudImg"
					src={heroCloud}
					className="w-full h-full object-cover rotate-180"
				/>
			</div>
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-full">
					<div className="w-full flex flex-col gap-5 px-40">
						<h1 className="text-white flex-1 font-HyperspaceRace text-[98px] font-black leading-[100px] capitalize">
							Contact Us <br /> For More Info
						</h1>
						<p className="text-white flex-1 font-Monstrate text-[20px] leading-normal">
							It is a long established fact that a reader will be distracted by{" "}
							<br />
							the readable content of a page when looking at its layout.
						</p>
					</div>
					<form
						className="flex flex-col gap-8 mt-20 px-40"
						onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							placeholder="Name"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						<input
							type="number"
							name="mobile_number"
							value={formData.mobile_number}
							onChange={handleChange}
							placeholder="Mobile Number"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
							required
						/>
						<input
							type="number"
							name="postcode"
							value={formData.postcode}
							onChange={handleChange}
							placeholder="Postcode"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<input
							type="number"
							name="tv_size"
							value={formData.tv_size}
							onChange={handleChange}
							placeholder="TV Size"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<textarea
							rows={10}
							name="special_request"
							value={formData.special_request}
							onChange={handleChange}
							placeholder="Special Request"
							className="w-full p-5 rounded-lg bg-white/20 border border-white backdrop-blur-[5px] placeholder:text-white text-white outline-none"
						/>
						<button
							type="submit"
							className="w-fit flex gap-3 justify-center items-center bg-[#F99A03] px-6 py-3 rounded-lg group">
							<span className="w-fit text-white font-Monstrate text-[20px] font-normal leading-tight tracking-tight">
								Submit
							</span>
							<Image
								src={arrowRight}
								alt="arrowRightImg"
								width={30}
								height={30}
								className="group-hover:translate-x-2 ease-in-out transition-all duration-300"
							/>
						</button>
					</form>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<div className="absolute -bottom-60">
					<Image
						alt="heroCloudImg"
						src={heroCloud}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
