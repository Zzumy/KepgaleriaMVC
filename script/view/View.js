export class View {
    #kep;
    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.#htmlLetrehozasa();
        this.balGombElem = $("#balGomb");
        this.jobbGombElem = $("#jobbGomb");
        this.nagyIMGElem = $("#nagyIMG");
        this.balGombElem.on("click", () => {
            this.#esemenyLetrehozas("bal");
        });
        this.jobbGombElem.on("click", () => {
            this.#esemenyLetrehozas("jobb");
        });
    }
    nagyKepBeallit(kep) {
        this.nagyIMGElem.attr({ src: kep, alt: kep });
    }
    #htmlLetrehozasa() {
        let txt = `<button id = "balGomb"><</button>`;
        txt += `<div><img class="fokeptarolo" id = "nagyIMG" src="${
            this.#kep
        }" alt="${this.#kep}"></div>`;
        txt += `<button id = "jobbGomb">></button>`;
        this.szuloElem.html(txt);
    }
    #esemenyLetrehozas(esemenyem) {
        window.dispatchEvent(new CustomEvent(esemenyem));
    }
}
