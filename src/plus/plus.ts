import "../helpers/event-target-polyfill.js";
import { ConnectionMixin } from "./connection.js";
import { VersionMixin } from "./version.js";

export class CardModPlus extends 
  VersionMixin(
    ConnectionMixin(EventTarget) 
  ) {
    constructor() {
        super();
        this.connect();
    }
}

window.addEventListener("card-mod-bootstrap", async (ev: CustomEvent) => {
  ev.stopPropagation();
  if (!(window as any).card_mod_plus) {
    (window as any).card_mod_plus = new CardModPlus();
  }
});