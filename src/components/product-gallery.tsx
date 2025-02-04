import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ProductGallery({ product }: { product: any }) {
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
			original: `https://themountingking.com/backend/public/${image}`,
			thumbnail: `https://themountingking.com/backend/public/${image}`,
		}));
	};
	console.log("first", product);
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
