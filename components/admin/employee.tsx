import { TemployeesColumnProps } from "@/types";
import getEmployees from "@/actions/get-employees";
import { useState, useEffect, useMemo } from "react";
import { ArrowDownIcon, ArrowUpIcon, UsersRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TotalEmployee() {
	const [products, setProducts] = useState<TemployeesColumnProps[]>([]);
	const [chartData, setChartData] = useState<
		{ month: string; count: number }[]
	>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getEmployees();
				setProducts(response.data);

				const currentDate = new Date();
				const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
					const date = new Date();
					date.setMonth(currentDate.getMonth() - i);
					return {
						month: date.toLocaleString("default", { month: "short" }),
						monthIndex: date.getMonth(),
						year: date.getFullYear(),
					};
				}).reverse();

				const updatedChartData = lastSixMonths.map(
					({ month, monthIndex, year }) => {
						const count = products.filter(
							(item: { created_at: Date | null }) => {
								if (!item.created_at) return false;
								const productDate = new Date(item.created_at);
								return (
									productDate.getMonth() === monthIndex &&
									productDate.getFullYear() === year
								);
							},
						).length;
						return { month, count };
					},
				);

				setChartData(updatedChartData);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};

		fetchProducts();
	});

	const totalProductCount = useMemo(() => {
		return products.length;
	}, [products]);

	const percentageChange = useMemo(() => {
		if (chartData.length < 2) return 0;

		const currentMonth = chartData[chartData.length - 1].count;
		const previousMonth = chartData[chartData.length - 2].count;

		if (currentMonth === 0 && previousMonth === 0) return 0;

		if (previousMonth === 0 && currentMonth > 0) return 100;

		if (previousMonth > 0 && currentMonth === 0) return -100;

		return parseFloat(
			(((currentMonth - previousMonth) / previousMonth) * 100).toFixed(1),
		);
	}, [chartData]);

	const isPositive = percentageChange >= 0;

	return (
		<Card className="w-full bg-card text-card-foreground border border-border">
			<CardHeader className="pb-2">
				<div className="w-full flex items-center justify-between">
					<CardTitle>Total Employees</CardTitle>
					<UsersRound
						className="text-black dark:text-white"
						size={24}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col space-y-1">
					<div className="text-2xl font-bold">+{totalProductCount}</div>
					<div className="flex items-center text-xs">
						<span
							className={`flex items-center ${
								isPositive
									? "text-green-500 dark:text-green-400"
									: "text-red-500 dark:text-red-400"
							}`}>
							{isPositive ? (
								<ArrowUpIcon className="h-3 w-3 mr-1" />
							) : (
								<ArrowDownIcon className="h-3 w-3 mr-1" />
							)}
							{isPositive ? "+" : ""}
							{percentageChange}%
						</span>
						<span className="text-muted-foreground ml-1">from last month</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
