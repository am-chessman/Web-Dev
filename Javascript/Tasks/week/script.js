const weekNum = document.querySelector('.week-number')
console.log(weekNum)

let currentDate = new Date();

let dayOfYear = (Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(currentDate.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;

let weekNumber = Math.ceil((dayOfYear + 1) / 7);

weekNum.innerHTML = weekNumber