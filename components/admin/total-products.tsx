import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { TproductsColumnProps } from "@/types";
import getProducts from "@/actions/get-products";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

const chartConfig = {
	desktop: {
		label: "Products",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export function TotalProducts() {
	const [products, setProducts] = useState<TproductsColumnProps[]>([]);
	const [chartData, setChartData] = useState<
		{ month: string; count: number }[]
	>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await getProducts();
				setProducts(response.data);

				const currentDate = new Date();
				const lastSixMonths = Array.from({ length: 6 }, (_, i) => {
					const date = new Date();
					date.setMonth(currentDate.getMonth() - i);
					return {
						month: date.toLocaleString("default", { month: "long" }),
						monthIndex: date.getMonth(),
					};
				}).reverse();

				const updatedChartData = lastSixMonths.map(({ month, monthIndex }) => {
					const count = products.filter(
						(product) => new Date(product.created_at).getMonth() === monthIndex,
					).length;

					return { month, count };
				});

				setChartData(updatedChartData);
			} catch (err) {
				console.error("Error fetching products:", err);
			}
		};

		fetchProducts();
	}, [products]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Total Products</CardTitle>
				<CardDescription>Last 6 Months</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{ top: 20 }}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey="count"
							fill="var(--color-desktop)"
							radius={8}>
							<LabelList
								position="top"
								offset={12}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="leading-none text-muted-foreground">
					Showing total products added for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
