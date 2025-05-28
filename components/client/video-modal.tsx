"use client";
import Image from "next/image";
import { useState } from "react";
import { bracket } from "@/public";

export default function VideoModal() {
	const [isOpen, setIsOpen] = useState(false);

	const openVideoModal = () => setIsOpen(true);
	const closeVideoModal = () => setIsOpen(false);

	return (
		<section
			id="video-sec"
			className="w-full flex flex-col items-center justify-center">
			<div
				className="w-full relative cursor-pointer h-[500px]"
				onClick={openVideoModal}>
				<Image
					src={bracket}
					alt="Video Thumbnail"
					className="w-full h-full object-cover rounded-[20px]"
				/>
			</div>
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
					<div className="relative w-11/12 max-w-2xl bg-white overflow-hidden">
						<button
							className="absolute top-1 right-2 text-[#DB932C] z-50 text-4xl"
							onClick={closeVideoModal}>
							&times;
						</button>
						<video
							className="w-full"
							controls
							muted
							loop
							autoPlay>
							<source
								src="/video.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>
				</div>
			)}
		</section>
	);
}
