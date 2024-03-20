function convertDateFormat() {
    var inputDate = document.getElementById('inputDate').value;
    var inputFormat = document.getElementById('inputFormat').value;
    var expectedFormat = document.getElementById('expectedFormat').value;

    var date = moment(inputDate, inputFormat);
    var formattedDate = date.format(expectedFormat);

    document.getElementById('outputBox').textContent = formattedDate;
}
