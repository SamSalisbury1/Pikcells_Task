import { renderer } from "./Renderer.js";
import { saveHandler } from "./SaveHandler.js";

document.getElementById("Update_Button").onclick = function() {
    renderer.ClearKitchen();
    renderer.RenderKitchen();
}

document.getElementById("Save_Button").onclick = function() {
    saveHandler.DownloadKitchenImage();
}