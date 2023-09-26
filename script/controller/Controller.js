import { Model } from "../model/model.js";
import { View } from "../view/view.js";

export class Controller {
    constructor() {
        const MODEL = new Model();
        const NAGYKEP = new View($(".nagykep").eq(0), MODEL.getAktKep());
        $(window).on("bal", () => {
            MODEL.bal();
            let aktKep = MODEL.getAktKep();
            NAGYKEP.nagyKepBeallit(aktKep);
        });
        $(window).on("jobb", () => {
            MODEL.jobb();
            let aktKep = MODEL.getAktKep();
            NAGYKEP.nagyKepBeallit(aktKep);
        });
    }
}
