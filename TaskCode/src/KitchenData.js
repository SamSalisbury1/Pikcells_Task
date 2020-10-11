import { constants } from "./Constants.js";

class KitchenData {
    constructor() {
        const kitchenJSON = this.GetJSON();
        this.data = this.OrderData(JSON.parse(kitchenJSON));
    }

    GetJSON() {
        const httpreq = new XMLHttpRequest();
        httpreq.open("GET", constants.JSON_URL, false);
        httpreq.send(null);
    
        return httpreq.responseText;
    }

    OrderData(kitchenData) {
        kitchenData.layers.forEach(layer => {
            layer.items.sort(function(a, b) {return a.order - b.order});
        });

        return kitchenData;
    }

    GetDefaultImages() {
        const imageSources = this.GetDefaultImageSources();
        const images = [];
    
        imageSources.forEach(source => {
            const currentImage = new Image();
            currentImage.src = source;
            images.push(currentImage);
        });
    
        return images;
    }

    GetDefaultImageSources() {
        const defaultConfiguration = this.data.default_configuration;
        const defaultImageSources = [];
    
        for (let i = 0; i < this.data.layers.length; i++) {
                const currentLayer = this.data.layers[i];
                const configurationIndex = defaultConfiguration[i];
                const imageSuffix = currentLayer.items[configurationIndex].imgSrc;
                defaultImageSources.push(constants.IMAGE_PREFIX + imageSuffix);
        }
    
        return defaultImageSources;
    }

    GetLayers() {
        return this.data.layers;
    }

    GetDefaultConfiguration() {
        return this.data.default_configuration;
    }
}

export const data = new KitchenData();