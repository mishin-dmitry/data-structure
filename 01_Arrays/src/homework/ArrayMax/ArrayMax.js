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
	return -1; // Please implement
}

module.exports = {
	findSmallestTransaction,
	findBestStudentMistakes,
	findAverageTime,
	findMostProfitableClient
}