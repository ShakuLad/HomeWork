var citiesArr = ['Bishkek', 'LosAngeles', 'Chicago', 'NewYork', 'Houston', 'Dallas', 'Philadelphia', 'Seattle','sss','Osh']
var newArray = []
var othersCities = []
var citiesWithS = []
var citiesWithoutS = []
for (var i = 0; i < citiesArr.length; i++) {
    var city = citiesArr[i].length;
    if(city >= 6){
        newArray.push(citiesArr[i])
    }
    else {
        othersCities.push(citiesArr[i])
    }
    if(citiesArr[i].toLowerCase().includes('s')) {
        citiesWithS.push(citiesArr[i])
    } else{
        citiesWithoutS.push(citiesArr[i])
    } 
}

console.log(`Массив с городами больше 6 символов ${newArray}`)
console.log(`Массив с городами меньше 6 символов ${othersCities}`)
console.log(`Массив с буквой s ${citiesWithS}`)
console.log(`Массив без буквы s ${citiesWithoutS}`)

var trafficLight = prompt('Введи цвета светофора').toLowerCase()
switch(trafficLight) {
    case 'red':
        alert('стоп')
        break;
    case 'красный':
        alert('стоп')
        break;
    case 'кызыл':
        alert('стоп')
        break;
    case 'yellow':
        alert('готовься')
        break;
    case 'желтый':
        alert('готовься')
        break;
    case 'жёлтый':
        alert('готовься')
        break;
    case 'сары':
        alert('готовься')
        break;
    case 'green':
        alert('ДАВИ НА ГАЗ')
        break;
    case 'зеленый':
        alert('ДАВИ НА ГАЗ')
        break;
    case 'зелёный':
        alert('ДАВИ НА ГАЗ')
        break;
    case 'жашыл':
        alert('ДАВИ НА ГАЗ')
        break;
    default:
        alert('Вводи красный либо желтый либо зеленый цвет')
}