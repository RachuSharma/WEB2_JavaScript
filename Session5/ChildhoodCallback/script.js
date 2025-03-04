function getPokemon(pokemon) {
    if (pokemon === "") return

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemon)
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.querySelector("#message").innerText = "Success!"
            const pkmn = JSON.parse(xhr.responseText)
            document.querySelector("img").src = pkmn.sprites.front_default
            document.querySelector("#id").innerText = pkmn.id
            document.querySelector("#name").innerText = pkmn.name
            const primaryType = pkmn.types[0].type.name
            const secondaryType = pkmn.types[1]?.type.name
            document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
        } else {
            displayError("Response was not OK!")
        }
    }
    xhr.onerror = () => displayError("Network Error!")
    xhr.send()
}

function displayError(message) {
    document.querySelector("#message").innerText = message
    document.querySelector("#id").innerText = ""
    document.querySelector("#name").innerText = ""
    document.querySelector("img").src = ""
    document.querySelector("#type").innerText = ""
}