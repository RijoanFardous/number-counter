let counterNumber = 0;
const mainNumberEl = document.getElementById('main-number');

function updateNumber(number) {
    if (!number) {
        counterNumber = 0;
        mainNumberEl.style.color = 'black';
    } else {
        counterNumber = counterNumber + number;

        if (counterNumber < 0) {
            mainNumberEl.style.color = '#DA0037';
        } else {
            mainNumberEl.style.color = '#368B85';
        }
    }
    mainNumberEl.innerText = counterNumber;
}
