var trafficLightBtn = document.querySelector('.traffic__light-btn')

trafficLightBtn.addEventListener('click', () => {
    var result = prompt('введите цвет светофора',)
    if (result.toLowerCase() === 'red') {
        var colorRed = document.querySelector('.red')
        colorRed.style.backgroundColor = 'red';
        colorRed.innerHTML = 'Stop';
    } else if (result.toLowerCase() === 'yellow') {
        var colorYellow = document.querySelector('.yellow')
        colorYellow.style.backgroundColor = 'yellow';
        colorYellow.innerHTML = 'Wait'
    } else if (result.toLowerCase() === 'green') {
        var colorGreen = document.querySelector('.green')
        colorGreen.style.backgroundColor = 'green';
        colorGreen.innerHTML = 'Go'
    } 
})


var text = document.querySelector('.text')
var btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    var result = prompt('введите текст',)
    text.innerHTML = result
})