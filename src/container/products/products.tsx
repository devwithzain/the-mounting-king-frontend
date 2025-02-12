import axios from "axios";
import toast from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { getToken } from "../../utils/get-token.ts";
import getProducts from "../../actions/get-products.ts";
import { getUserData } from "../../utils/currentUser.ts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TproductsProps, TuserProps } from "../../types/index.ts";

export default function Products() {
	const token = getToken();
	const navigate = useNavigate();
	const location = useLocation();
	const [products, setProducts] = useState([]);
	const [user, setUser] = useState<TuserProps>();

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = await getUserData(token);
			setUser(userData);
		};
		fetchUserData();
	});

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts();
				setProducts(response.data);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};
		fetchProducts();
	}, []);

	const addToCart = async (productId: string) => {
		if (!token) {
			navigate("/login", { state: { from: location.pathname } }); // Redirect to login
		} else {
			try {
				const response = await axios.post(
					`https://themountingking.com/backend/api/cart`,
					{
						user_id: user?.id,
						product_id: productId,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				toast.success(response.data.success);
			} catch (error: unknown) {
				if (error instanceof Error) {
					toast.error(error.message);
				} else {
					toast.error("An unknown error occurred");
				}
			}
		}
	};

	return (
		<div className="w-full z-50 py-80 relative padding-x xm:py-10 sm:py-10 md:py-20">
			<div className="w-full grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xm:grid-cols-1 gap-7">
				{products.map((product: TproductsProps) => (
					<div
						key={product.id}
						className="bg-[#1f1f3d] relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg cursor-pointer flex flex-col group">
						<div className="w-full absolute z-50 -top-full group-hover:top-3 transition-all duration-300 ease-in-out">
							<div className="w-full flex items-center justify-between px-4 py-2">
								<button>
									<FaShoppingCart
										onClick={() => addToCart(product.id)}
										size={25}
										className="text-black"
									/>
								</button>
								<FaRegHeart
									size={25}
									className="text-black"
								/>
							</div>
						</div>
						<div className="w-full relative flex items-center justify-center">
							<img
								className="w-full h-[300px] object-cover"
								src={`https://themountingking.com/backend/public/${
									JSON.parse(product.images)[0]
								}`}
								alt={product.title}
							/>
							<div className="group-hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
						</div>
						<div className="p-4 w-full h-full flex flex-col justify-between gap-4">
							<h3 className="text-lg text-white font-Monstrate leading-tight font-bold">
								{product.title}
							</h3>
							<p className="text-lg font-Monstrate leading-normal text-white font-medium">
								{product.shortDescription}
							</p>
							<div className="flex items-center justify-between">
								<span className="text-xl text-white font-Monstrate leading-tight font-bold">
									${product.price}
								</span>
								<Link
									className={`w-fit bg-[#F99A03] btn text-center transition-all duration-300 ease-in-out text-white px-6 py-3 rounded-lg text-[20px] font-Monstrate leading-tight tracking-tight`}
									to={`/products/product-detail/${product.id}`}>
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
