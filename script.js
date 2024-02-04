var pedine = [
    torre_black, cavallo_black, alfiere_black, regina_black, re_black, alfiere_black, cavallo_black, torre_black,
    pedina_black, pedina_black, pedina_black, pedina_black, pedina_black, pedina_black, pedina_black, pedina_black,
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    pedina_white, pedina_white, pedina_white, pedina_white, pedina_white, pedina_white, pedina_white, pedina_white,
    torre_white, cavallo_white, alfiere_white, regina_white, re_white, alfiere_white, cavallo_white, torre_white
];

var board = document.getElementById("chessboard");

function creaTabellone() {
    pedine.forEach((pezzo,  i) => {
        const cella = document.createElement("div");
        cella.classList.add("celle");
        cella.innerHTML = pezzo;
        cella.setAttribute("celle-id", i);
        board.appendChild(cella)

        const riga = Math.floor((63 - i) / 8) + 1;
        if(riga % 2 === 0) cella.classList.add(i % 2 === 0 ? "celle" : "celle2");
        else cella.classList.add(i % 2 === 0 ? "celle2" : "celle");
    })
}

creaTabellone();