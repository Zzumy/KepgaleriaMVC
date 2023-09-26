import { KEPLISTA } from "./adat.js";

export class Model {
    #keplLista = [];
    #id;

    constructor() {
        this.#keplLista = KEPLISTA;
        this.#id = 0;
    }

    getKepList() {
        return [...this.#keplLista];
    }

    getAktKep() {
        return this.#keplLista[this.#id];
    }

    jobb() {
        this.#id++;
        if (this.#id > this.#keplLista.length - 1) {
            this.#id = 0;
        }
    }

    bal() {
        this.#id--;
        if (this.#id < 0) {
            this.#id = this.#keplLista.length - 1;
        }
    }
}
