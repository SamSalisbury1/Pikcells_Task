import $ from "./jquery.module.js";
import { initialiser } from "./Initialiser.js";
import { uiHandler } from "./UIHandler.js";
import { saveHandler } from "./SaveHandler.js";

class Main {
    main() {
        // If user is using IE Take them to Not Supported Page.
        if (navigator.appVersion.indexOf("MSIE")!=-1) {
            window.location.href = "./NotSupported.html";
        }

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