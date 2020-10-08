import $ from "./jquery.module.js";
import { renderer } from "./Renderer.js";
import { initialiser } from "./Initialiser.js";
import { constants } from "./Constants.js";
import { uiHandler } from "./UIHandler.js";

class Main {
    main() {
        initialiser.Initialise();
    }
}

const main = new Main();
main.main();

document.getElementById("Update_Button").onclick = function() {
    uiHandler.UpdateCanvas();
}

document.getElementById("Save_Button").onclick = function() {
    uiHandler.UpdateCanvas();
}
