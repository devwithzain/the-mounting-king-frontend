import Link from "next/link";
import Image from "next/image";
import { productsItems } from "@/constants";

export default function Products() {
	return (
		<div className="w-full py-80 relative padding-x xm:py-10 sm:py-10 md:py-20">
			<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-14">
				{productsItems.map((product) => (
					<div
						key={product.id}
						className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 hover:shadow-lg cursor-pointer flex justify-between flex-col">
						<div className="w-full relative flex items-center justify-center">
							<Image
								width={400}
								height={400}
								className="w-full object-cover"
								src={product.img}
								alt={product.title}
							/>
							<div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
							{product.isOnSale && (
								<div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
									{product.saleText}
								</div>
							)}
						</div>
						<div className="p-4 w-full flex flex-col justify-between gap-4">
							<h3 className="text-lg font-Monstrate leading-tight font-bold">
								{product.title}
							</h3>
							<p className="text-lg font-Monstrate leading-tight font-medium">
								{product.description}
							</p>
							<div className="flex items-center justify-between">
								<span className="text-lg font-Monstrate leading-tight font-bold">
									{product.price}
								</span>
								<Link
									className={`w-fit bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
									href={`/products/product-detail/${product.href}`}>
									View Detail
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
