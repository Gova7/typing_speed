let speedTestContainerEl = document.getElementById("speedTypingTest")

let spinnerEl = document.getElementById("spinner")

let timerEl = document.getElementById("timer")

let resultEl = document.getElementById("result")

let quoteDisplayEl = document.getElementById("quoteDisplay")
let quoteInputEl = document.getElementById("quoteInput")

let submitBtnEl = document.getElementById("submitBtn")
let resetBtnEl = document.getElementById("resetBtn")


timer = 0

let id = setInterval(function () {
    timer = timer + 1
    timerEl.textContent = timer + "seconds"

}, 1000)

spinnerEl.classList.add("d-none")

let url = "https://apis.ccbp.in/random-quote"
let options = {
    method: "GET"

}

fetch(url, options)
    .then(function (response) {
        return response.json()
    })
    .then(function (result) {
        quoteDisplayEl.textContent = result.content
    })

submitBtnEl.addEventListener("click", function () {

    let quoteInput = quoteInputEl.value
    let quoteDisplay = quoteDisplayEl.textContent
    if (quoteDisplay === quoteInput) {
        resultEl.textContent = "You typed in " + timer + " seconds"
        clearInterval(id)
    } else {
        resultEl.textContent = "You typed incorrect sentence"
    }


})

resetBtnEl.addEventListener("click", function () {
    spinnerEl.classList.remove("d-none")
    fetch(url, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            quoteDisplayEl.textContent = result.content
            spinnerEl.classList.add("d-none")
        })


    clearInterval(id)
    timer = 0

    id = setInterval(function () {
        timer = timer + 1
        timerEl.textContent = timer + "seconds"

    }, 1000)



})