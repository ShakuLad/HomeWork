var month = prompt('Ваш месяц рождения', );
var day = prompt('Ваш день рождения', );

if (month === '1' && day >= 20 && day <=31 || month === '2' && day <= 19 && day <= 28 && day >=1) {
    alert('Водолей');
} else if (month === '2' && day >= 20 && day <=28 || month === '3' && day <= 20 && day <= 31 && day >=1) {
    alert('Рыбы');
} else if (month === '3' && day >= 21 && day <=31 || month === '4' && day <= 19 && day <= 30 && day >=1) {
    alert('Овен');
} else if (month === '4' && day >= 20 && day <=30 || month === '5' && day <= 20 && day <= 31 && day >=1) {
    alert('Телец');
} else if (month === '5' && day >= 21 && day <=31 || month === '6' && day <= 20 && day <= 30 && day >=1) {
    alert('Близнецы');
} else if (month === '6' && day >= 21 && day <=30 || month === '7' && day <= 22 && day <= 31 && day >=1) {
    alert('Рак');
} else if (month === '7' && day >= 23 && day <=31 || month === '8' && day <= 22 && day <= 31 && day >=1) {
    alert('Лев')
} else if (month === '8' && day >= 23 && day <=31 || month === '9' && day <= 22 && day <= 30 && day >=1) {
    alert('Дева');
} else if (month === '9' && day >= 23 && day <=30 || month === '10' && day <= 23 && day <= 31 && day >=1) {
    alert('Весы')
} else if (month === '10' && day >= 24 && day <=31 || month === '11' && day <= 22 && day <= 30 && day >=1) {
    alert('Скорпион');
} else if (month === '11' && day >= 23 && day <=30 || month === '12' && day <= 21 && day <= 31 && day >=1) {
    alert('Стрелец');
} else if (month === '12' && day >= 21 && day <=31 || month === '1' && day <= 19 && day <= 30 && day >=1) {
    alert('Козерог');
} else {
    alert('Error');
}