"use client";
import { TpositionProps } from "@/types";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallery({
	product,
}: {
	product: TpositionProps;
}) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const formatGalleryItems = (product: any) => {
		let images = [];
		try {
			images = JSON.parse(product.data.images);
		} catch (error) {
			console.error(
				"Error parsing images JSON:",
				error,
				"Images:",
				product.images,
			);
			return [];
		}

		return images.map((image: string) => ({
			original: `http://127.0.0.1:8000/storage/${image}`,
			thumbnail: `http://127.0.0.1:8000/storage/${image}`,
		}));
	};
	return (
		<ReactImageGallery
			items={formatGalleryItems(product)}
			thumbnailPosition="left"
			showPlayButton={false}
			showBullets={false}
			infinite={true}
			slideOnThumbnailOver={true}
			lazyLoad={true}
			showFullscreenButton={false}
		/>
	);
}
