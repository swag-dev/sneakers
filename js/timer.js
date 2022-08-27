let discount = '2022-09-01'

function setInterval(discount){
    let time = Date.parse(discount) - Date.parse(new Date())
    let days = Math.floor(time / (24 * 60 * 60 * 1000))
    let hours = Math.floor(time / (60 * 60 * 1000) % 24)
    let minutes = Math.floor(time / (60 * 1000) % 60)
    let seconds = Math.floor(time / 1000) % 60
    return ({
        'time': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    })
}
console.log(setInterval(discount))