export const data = {
	barData: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				label: "Earning (in k)",
				data: [60, 40, 90, 68, 78, 34, 79, 93, 86, 70, 59, 73],
				backgroundColor: "#F1EFFF",
				borderRadius: 7,
				hoverBackgroundColor: "#5932EA",
				barThickness: 35,
				barPercentage: 5,
			},
		],
	},
	option: {
		maintainAspectRatio: false,
		scales: {
			x: {
				grid: {
					display: false,
				},
			},
			y: {
				display: false,
			},
		},
		plugins: {
			tooltip: { enabled: false },
			legend: { display: false },
		},
	},
	pieData: {
		labels: [],
		datasets: [
			{
				label: "",
				data: [18, 47, 35],
				backgroundColor: ["#F62D93", "#5D36E9", "#F1EFFC"],
				cutout: "70%",
			},
		],
	},
};
