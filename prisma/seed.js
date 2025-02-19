const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	console.log("Seeding database...");

	// Delete existing entries
	await prisma.transaction.deleteMany();

	// Insert seed data
	await prisma.transaction.createMany({
		data: [
			{
				description: "Freelance Payment",
				amount: 500.0,
				type: "inc",
				account: "Checking",
				category: "Income",
				date: new Date(),
			},
			{
				description: "Groceries",
				amount: 75.49,
				type: "exp",
				account: "Checking",
				category: "Food",
				date: new Date(),
			},
			{
				description: "Car Payment",
				amount: 250.0,
				type: "exp",
				account: "CreditCard",
				category: "Bills",
				date: new Date(),
			},
		],
	});

	console.log("Seeding completed! ✅");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
