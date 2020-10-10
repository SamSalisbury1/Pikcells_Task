import { initialiser } from "./Initialiser.js";
import { uiHandler } from "./UIHandler.js";
import { saveHandler } from "./SaveHandler.js";
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
    saveHandler.DownloadKitchenImage();
}