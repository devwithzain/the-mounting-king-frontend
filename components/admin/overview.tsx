import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export const Overview = ({ data }: any) => {
	return (
		<ResponsiveContainer
			width="100%"
			height="100%">
			<BarChart data={data}>
				<XAxis
					dataKey="name"
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
				/>
				<YAxis
					stroke="#888888"
					fontSize={12}
					tickLine={false}
					axisLine={false}
					tickFormatter={(value) => `$${value}`}
				/>
				<Bar
					dataKey="total"
					fill="#3498db"
					radius={[4, 4, 0, 0]}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};
