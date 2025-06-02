import { TbookingsProps, TgraphData, } from "@/types";

export const getGraphRevenue = (orders: TbookingsProps[]): TgraphData[] => {
	const monthlyRevenue: { [key: number]: number; } = {};

	const paidOrders = orders;

	for (const order of paidOrders) {
		const month = order.created_at ? new Date(order.created_at).getMonth() : 0;
		let revenueForOrder = 0;

		revenueForOrder += Number(order.totalPrice);

		monthlyRevenue[month] = (monthlyRevenue[month] || 0) + revenueForOrder;
	}

	const graphData: TgraphData[] = [
		{ name: "Jan", total: 0 },
		{ name: "Feb", total: 0 },
		{ name: "Mar", total: 0 },
		{ name: "Apr", total: 0 },
		{ name: "May", total: 0 },
		{ name: "Jun", total: 0 },
		{ name: "Jul", total: 0 },
		{ name: "Aug", total: 0 },
		{ name: "Sep", total: 0 },
		{ name: "Oct", total: 0 },
		{ name: "Nov", total: 0 },
		{ name: "Dec", total: 0 },
	];

	for (const month in monthlyRevenue) {
		graphData[parseInt(month)].total = monthlyRevenue[parseInt(month)];
	}

	return graphData;
};