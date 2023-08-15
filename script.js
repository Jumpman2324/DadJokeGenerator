const btnEl = document.getElementById("button")
const jokeEl = document.getElementById("joke")

const apiKey = "a7POmVrlN+zwR1c8dUsc/w==zlTM2yeR11d4Phah"

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"



 async function getJoke() {

    jokeEl.textContent = "updating..."
    btnEl.disabled = true
    btnEl.textContent = "loading..."
    const response = await fetch(apiURL, options)
    const data = await response.json()
    jokeEl.textContent =data[0].joke 
    btnEl.disabled = false
    btnEl.textContent = "Tell me a Joke"
}



btnEl.addEventListener("click", getJoke )