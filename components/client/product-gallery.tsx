"use client";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { TproductsColumnProps } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

export default function ProductGallery({
	product,
}: {
	product: TproductsColumnProps;
}) {
	const totalSlides = product.image?.length;
	const swiperRef = useRef<SwiperType | null>(null);
	const [currentIndex, setCurrentIndex] = useState(1);

	const handleSlideChange = () => {
		if (swiperRef.current) {
			setCurrentIndex(swiperRef.current.realIndex + 1);
		}
	};

	return (
		<div className="flex flex-col items-center gap-4">
			<Swiper
				modules={[Navigation]}
				grabCursor
				className="w-[500px] overflow-visible !mr-0 !ml-0"
				slidesPerView={1}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onSlideChange={handleSlideChange}>
				{Array.isArray(product.image) &&
					product.image.map((imgPath, index) => (
						<SwiperSlide key={index}>
							<div className="w-full flex flex-col gap-4">
								<div className="relative w-full overflow-hidden rounded-xl">
									<Image
										src={`https://The Mounting King.demo-weblink.com/backend/storage/${imgPath}`}
										alt={`Product image ${index + 1}`}
										className="object-cover rounded-xl transition-opacity duration-700 ease-in-out w-full h-full"
										width={700}
										height={700}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
			</Swiper>
			<div className="w-full flex items-center justify-between gap-2 mt-4">
				<div className="text-lg text-black font-semibold leading-tight tracking-tight">
					{currentIndex} / {totalSlides}
				</div>
				<div className="flex gap-6">
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						disabled={swiperRef.current?.isBeginning}
						className={`flex items-center justify-center hover:scale-150 duration-200 ease-linear ${
							swiperRef.current?.isBeginning
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}>
						<svg
							aria-hidden="true"
							className="w-10 h-10 rotate-180"
							focusable="false"
							role="presentation"
							viewBox="-19 23 66 16"
							xmlns="http://www.w3.org/2000/svg">
							<path d="m-19 29.6h64v2.9h-64z"></path>
							<path d="m47 31-2-2-6-6-2 2 5.9 6-5.9 6 2 2 6-6z"></path>
						</svg>
					</button>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						disabled={swiperRef.current?.isEnd}
						className={`flex items-center justify-center hover:scale-150 duration-200 ease-linear ${
							swiperRef.current?.isEnd ? "opacity-50 cursor-not-allowed" : ""
						}`}>
						<svg
							aria-hidden="true"
							className="w-10 h-10"
							focusable="false"
							role="presentation"
							viewBox="-19 23 66 16"
							xmlns="http://www.w3.org/2000/svg">
							<path d="m-19 29.6h64v2.9h-64z"></path>
							<path d="m47 31-2-2-6-6-2 2 5.9 6-5.9 6 2 2 6-6z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
