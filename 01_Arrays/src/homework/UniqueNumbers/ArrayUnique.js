function lettersLearnedToday(word) {
  return [...new Set(word.split(''))].join('');
}

function avoidJailDueToTaxFraud(report) {
  let notUniqueValue = -1;
  const flatReport = report.flat();

  for (let i = 0; i < flatReport.length; i++) {
    const firstIndexOfEl = flatReport.indexOf(flatReport[i]);

    if (firstIndexOfEl !== i) {
      notUniqueValue = flatReport[firstIndexOfEl];
      break;
    }
  }

  return notUniqueValue;
}

module.exports = {
  lettersLearnedToday,
  avoidJailDueToTaxFraud
}