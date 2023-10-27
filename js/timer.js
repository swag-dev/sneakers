let discount = '2023-11-10'

function addZero(timeUnit){
    if(timeUnit < 10){
        return '0' + timeUnit
    }else{
        return timeUnit
    }
}

function getInterval(){
    let time = Date.parse(discount) - Date.parse(new Date()),
    days2 = Math.floor(time / (24 * 60 * 60 * 1000)),
    hours2 = Math.floor(time / (60 * 60 * 1000) % 24),
    minutes2 = Math.floor(time / (60 * 1000) % 60),
    seconds2 = Math.floor(time / 1000) % 60,
    days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    minutes = document.querySelector('#minutes'),
    seconds = document.querySelector('#seconds')

    days.textContent = addZero(days2)
    hours.textContent = addZero(hours2)
    minutes.textContent = addZero(minutes2)
    seconds.textContent = addZero(seconds2)
    return time
}
let interval = setInterval(getInterval, 1000)
if(getInterval() < 0){
    clearInterval(interval)
    days.textContent = '00'
    hours.textContent = '00'
    minutes.textContent = '00'
    seconds.textContent = '00'
}
