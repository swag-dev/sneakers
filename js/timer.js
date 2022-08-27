//discount timer

let discount = '2022-09-01'
function getTimerIntervel(discount){
    let time = Date.parse(discount) - Date.parse(new Date()),
        days = Math.floor(time / (1000 * 60 * 60 * 24)),
        hours = Math.floor(time / (1000 * 60 * 60) % 24),
        minutes = Math.floor(time / (1000 * 60) % 60),
        seconds = Math.floor(time / 1000 % 60)
        return ({
            'time': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        })
}
function changeTime(deadline, parentSelector){
    let timerBlock = document.querySelector(parentSelector),
        days = timerBlock.querySelector('#days'),
        hours = timerBlock.querySelector('#hours'),
        minutes = timerBlock.querySelector('#minutes'),
        seconds = timerBlock.querySelector('#seconds')

        setClock()
        let timerId = setInterval(setClock, 1000)
        
        function setClock(){
            let time = getTimerIntervel(deadline)

            days.innerText = addZero(time.days)
            hours.innerText = addZero(time.hours)
            minutes.innerText = addZero(time.minutes)
            seconds.innerText = addZero(time.seconds)

            if(time.time < 0){
                clearInterval(timerId)
            }
        }
}

function addZero(num){
    if(num < 10){
        return '0' + num
    }else{
        return num
    }
}
changeTime(discount, '.discount__timer')

// Timer 2
// let discount = '2022-09-01'

// function setInterval(discount){
//     let time = Date.parse(discount) - Date.parse(new Date())
//     let days = Math.floor(time / (24 * 60 * 60 * 1000))
//     let hours = Math.floor(time / (60 * 60 * 1000) % 24)
//     let minutes = Math.floor(time / (60 * 1000) % 60)
//     let seconds = Math.floor(time / 1000)
//     return ({
//         'time': time,
//         'time': time,
//         'time': time,
//         'time': time,
//         'time': time,
//     })
// }
// console.log(setInterval(discount))