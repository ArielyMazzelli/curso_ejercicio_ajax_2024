const d = document,
    $template = d.querySelector(".pokemon"),
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
    };

let products, prices;

const getPokemon = async () => {
    let res = await fetch(""),
        json = res.json();
}