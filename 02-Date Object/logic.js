if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
}
birthYear = currentYear - birthDetails.year;
if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
}
else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
}
if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
}
else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
        birthMonth = 11;
        birthYear--;
    }
}
displayResult(birthDate, birthMonth, birthYear);

function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}