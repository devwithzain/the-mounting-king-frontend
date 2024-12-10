import Link from "next/link";
import Image from "next/image";
import { productsItems } from "@/constants";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
	return (
		<div className="w-full py-80 relative padding-x xm:py-10 sm:py-10 md:py-20">
			<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-14">
				{productsItems.map((product) => (
					<Link
						href={`/products/product-detail/${product.href}`}
						key={product.id}
						className="bg-white relative rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 hover:shadow-lg cursor-pointer flex flex-col group">
						<div className="w-full absolute z-50 -top-full group-hover:top-3 transition-all duration-300 ease-in-out">
							<div className="w-full flex items-center justify-between px-4 py-2">
								<Link href="/cart">
									<FaShoppingCart
										size={25}
										className="text-black"
									/>
								</Link>
								<FaRegHeart
									size={25}
									className="text-black"
								/>
							</div>
						</div>
						<div className="w-full relative flex items-center justify-center">
							<Image
								width={400}
								height={400}
								className="w-full object-cover"
								src={product.img}
								alt={product.title}
							/>
							<div className="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
						</div>
						<div className="p-4 w-full h-full flex flex-col justify-between gap-4">
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
					</Link>
				))}
			</div>
		</div>
	);
}
