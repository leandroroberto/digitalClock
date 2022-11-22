let weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

function relogio() {
    let hours = document.querySelector(".horas")
    let minutes = document.querySelector(".minutos")
    let seconds = document.querySelector(".segundos")
    let data = document.querySelector("#dataCompleta")

    let hoursNow = hours.textContent = new Date().getHours()
    let minutesNow = minutes.textContent = new Date().getMinutes()
    let secondsNow = seconds.textContent = new Date().getSeconds()

    if (hours.textContent < 10) {
        hours.textContent = "0" + hoursNow
    }

    if (minutes.textContent < 10) {
        minutes.textContent = "0" + minutesNow
    }

    if (seconds.textContent < 10) {
        seconds.textContent = "0" + secondsNow
    }

    let dayWeek = new Date().getDay()
    let dayMonth = new Date().getDate()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    data.textContent = `${weekDay[dayWeek]} dia ${dayMonth} de ${monthNames[month]} de ${year}`

}


setInterval("relogio()", 1000)

