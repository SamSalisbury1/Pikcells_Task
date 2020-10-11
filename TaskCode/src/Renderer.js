import { data } from "./KitchenData.js";
import { constants } from "./Constants.js";

class Renderer{
    RenderKitchen() {
        const canvas = $("#kitchen_Canvas").get(0),
        context = canvas.getContext('2d');
        const imageSources = data.GetImageSources();

        for (let i = 0; i < data.GetLayers().length; i++) {
            if (i == constants.MAX_NUMBER_OF_LAYERS) {
                alert ("Config file exceeded maximum of " + constants.MAX_NUMBER_OF_LAYERS + " Layers.");
                    return;
            }

            const image = new Image();
            image.setAttribute('crossorigin', 'anonymous');
            image.onload = function() {
                context.drawImage(image, 0, 0);
            }
            image.src = imageSources[i];
        }
    }

    ClearKitchen() {
        const canvas = $("#kitchen_Canvas").get(0),
        context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export const renderer = new Renderer();