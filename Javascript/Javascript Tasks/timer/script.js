let minuteElement = Number(document.getElementById('minute').innerHTML);
let secondElement = Number(document.getElementById('second').innerHTML);
let hourElement = Number(document.getElementById('hour').innerHTML);

function hourUpdate() {
    hourElement += 1
    if (hourElement == 100) {
        hourElement = 0
    }
    document.getElementById('hour').innerHTML = hourElement
}

function minuteUpdate() {
    minuteElement += 1
    if (minuteElement == 60) {
        minuteElement = 0
    }
    document.getElementById('minute').innerHTML = minuteElement
}

function secondUpdate() {
    secondElement += 1
    if (secondElement == 60) {
        secondElement = 0
    }
    document.getElementById('second').innerHTML = secondElement
}

minuteUpdate();
setInterval(secondUpdate, 1000);
setInterval(minuteUpdate, 60000);
setInterval(hourUpdate, 3600000)
