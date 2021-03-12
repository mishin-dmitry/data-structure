function findSmallestTransaction(transactions) {
	let minTransaction;

	transactions.forEach(transaction => {
		if (!minTransaction) {
			minTransaction = transaction;
			return;
		}

		const minAbs = Math.min(Math.abs(minTransaction), Math.abs(transaction));
		minTransaction = minAbs === Math.abs(minTransaction) ? minTransaction : transaction;
	});

	return minTransaction;
}

function findBestStudentMistakes(students) {
	return -1; // Please implement
}

function findAverageTime(times) {
	return -1; // Please implement
}

function findMostProfitableClient(income) {
	return -1; // Please implement
}

module.exports = {
	findSmallestTransaction,
	findBestStudentMistakes,
	findAverageTime,
	findMostProfitableClient
}