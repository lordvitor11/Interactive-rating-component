let question = document.querySelector("main .container #question");
let result = document.querySelector("main .container #result");
let opts = document.querySelectorAll("main section .content .options .item");
let rate = document.querySelector("main .container #result .rate span");
let choice = 0;

function verify(opt) {
    for (let c = 0;c < opts.length;c++) {
        if (opts[c].classList.contains("selected")) {
            opts[c].classList.remove("selected");
        }
    }

    opts[opt].classList.add("selected");
    choice = opt;
}

function proceed() {
    question.style.display = "none";
    result.style.display = "flex";

    if (choice !== 0) {
        rate.innerHTML = `Você selecionou ${choice + 1} de ${opts.length} estrelas`;
    } else {
        rate.innerHTML = `Você selecionou ${choice} de ${opts.length} estrelas`;
    }
}
