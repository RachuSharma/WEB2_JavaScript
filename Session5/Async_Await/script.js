async function getPokemon(pokemon) {
    if (pokemon === "") return

    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        if (!response.ok) throw new Error("Response was not OK!")
        document.querySelector("#message").innerText = "Success!"
        const pkmn = await response.json()
        document.querySelector("img").src = pkmn.sprites.front_default
        document.querySelector("#id").innerText = pkmn.id
        document.querySelector("#name").innerText = pkmn.name
        const primaryType = pkmn.types[0].type.name
        const secondaryType = pkmn.types[1]?.type.name
        document.querySelector("#type").innerText = secondaryType ? `${primaryType}/${secondaryType}` : primaryType
    } catch (err) {
        document.querySelector("#message").innerText = err
        document.querySelector("#id").innerText = ""
        document.querySelector("#name").innerText = ""
        document.querySelector("img").src = ""
        document.querySelector("#type").innerText = ""
    }
}