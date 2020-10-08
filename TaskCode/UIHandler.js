import { renderer } from "./Renderer.js";
import { constants } from "./Constants.js";

class UIHandler {
    UpdateCanvas() {
        const images = this.GetSelectedImages();
    
        renderer.ClearKitchen();
        renderer.RenderKitchen(images);
    }

    GetSelectedImages() {
        const imageSources = this.GetSelectedImageSources();
        const images = [];
    
        imageSources.forEach(source => {
            const currentImage = new Image();
            currentImage.src = source;
            images.push(currentImage);
        });
    
        return images;
    }
    
    GetSelectedImageSources() {
        return [
            constants.IMAGE_PREFIX + $("#Layer_1_Select").val(),
            constants.IMAGE_PREFIX + $("#Layer_2_Select").val(),
            constants.IMAGE_PREFIX + $("#Layer_3_Select").val()
        ]
    }
}

export const uiHandler = new UIHandler();