"use client";
import { TbookingsProps } from "@/types";
import getBookings from "@/actions/get-bookings";
import { useState, useEffect, useMemo } from "react";
import { ArrowDownIcon, ArrowUpIcon, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TotalRevenue() {
	const [sales, setSales] = useState<TbookingsProps[]>([]);
	const [chartData, setChartData] = useState<
		{ month: string; count: number }[]
	>([]);

	useEffect(() => {
		const fetchSales = async () => {
			try {
				const response = await getBookings();

				// No filtering by status, use all bookings
				const allSales = response.data;
				setSales(allSales);

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
						const count = allSales.filter((sale: { created_at: string }) => {
							const saleDate = new Date(sale.created_at);
							return (
								saleDate.getMonth() === monthIndex &&
								saleDate.getFullYear() === year
							);
						}).length;

						return { month, count };
					},
				);

				setChartData(updatedChartData);
			} catch (err) {
				console.error("Error fetching sales:", err);
			}
		};

		fetchSales();
	}, []);

	// ✅ Calculate total revenue from totalPrice field
	const totalRevenue = useMemo(() => {
		const total = sales.reduce((acc, sale) => {
			const price = sale.totalPrice;
			return acc + price;
		}, 0);

		return `$${total.toLocaleString("en-US", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})}`;
	}, [sales]);

	// ✅ Calculate month-to-month percentage change
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
					<CardTitle>Total Revenue</CardTitle>
					<DollarSign
						className="text-black dark:text-white"
						size={24}
					/>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col space-y-1">
					<div className="text-2xl font-bold">{totalRevenue}</div>
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
