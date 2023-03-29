const button = document.querySelector(".search__button")
const input = document.querySelector(".search__input")
const select = document.querySelector(".search__select")

button.addEventListener("click", submitRequest);
input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        submitRequest(event)
    }
});

function submitRequest(event) {
    console.log(input.value);
    console.log(select.value);
    let params;

    if (select.value === "google" || select.value === "bing") {
        params = `search?q=${input.value}`;
    }
    else if (select.value === "yandex"){ 
        params = `search/?text=${input.value}`;
    }
    else if (select.value === "duckduckgo"){
        params = `?va=u&t=he&q=${input.value}&ia=web`
    }

    window.location.href = `https://www.${select.value}.com/${params}`;
}

// ДЗ: Запрограммировать чтоб работало. 
// 1. Сделать автоматическую подстановку поисковой системы;
// 2. Сделать минималистичную верстку всей страницы;


// "https://www.google.com/search?q=api"

//https://duckduckgo.com/ -> https://duckduckgo.com/?va=u&t=hc&q=api&ia=web
//https://www.bing.com/ -> https://www.bing.com/search?q=api&form=QBLH&sp=-1&ghc=1&lq=0&pq=api&sc=10-3&qs=n&sk=&cvid=B45C2F4CF7414610897DCAC502B0D73B&ghsh=0&ghacc=0&ghpl=
//https://yandex.com/ -> https://yandex.com/search/?text=api&lr=115503