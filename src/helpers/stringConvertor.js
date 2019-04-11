export const getPokemonIdFromUrl = (url) => {
    let sliced = url.slice(0, -1);
    return sliced.substring(sliced.lastIndexOf("/") + 1);
}