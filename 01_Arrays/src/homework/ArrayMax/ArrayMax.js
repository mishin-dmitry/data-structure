function findSmallestTransaction(transactions) {
	return transactions.reduce((acc, cur) => {
		const minAbs = Math.min(Math.abs(acc), Math.abs(cur));

		return minAbs === Math.abs(acc) ? acc : cur;
	});
}

function findBestStudentMistakes(students) {
	return students.reduce((acc, cur) => Math.min(acc, cur));
}

function findAverageTime(times) {
	const studentsCount = times.length;
	const averageTime = times.reduce((acc, curValue) => acc + curValue, 0);

	return averageTime / studentsCount;
}

function findMostProfitableClient(income) {
	// Найдем сумму заказов для 1 клиента
	const findClientSum = (orders) => orders.reduce((acc, cur) => acc + cur);

	return income.reduce((acc, curValue, index) => {
		const currentSum = findClientSum(curValue);

		return acc.currentSum < currentSum ? { currentSum, index } : acc;
	}, { currentSum: 0, index: -1 }).index;
}

module.exports = {
	findSmallestTransaction,
	findBestStudentMistakes,
	findAverageTime,
	findMostProfitableClient
}