import $ from "./jquery.module.js";
import { renderer } from "./Renderer.js";
import { constants } from "./Constants.js";

class Initialiser {
    Initialise() {
        const kitchenData = this.GetKitchenData();
        this.ShowDefaultKitchen(kitchenData);
        this.PopulateDropDownLists(kitchenData);
    }

    GetKitchenData() {
        const kitchenJSON = this.GetJSON();
        return this.OrderData(JSON.parse(kitchenJSON));
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

    ShowDefaultKitchen(kitchenData) {
        const defaultImages = this.GetDefaultImages(kitchenData);
        renderer.RenderKitchen(defaultImages);
    }

    GetDefaultImages(kitchenData) {
        const imageSources = this.GetDefaultImageSources(kitchenData);
        const images = [];
    
        imageSources.forEach(source => {
            const currentImage = new Image();
            currentImage.src = source;
            images.push(currentImage);
        });
    
        return images;
    }
    
    GetDefaultImageSources(kitchenData) {
        const defaultConfiguration = kitchenData.default_configuration;
        const defaultImageSources = [];
    
        for (let i = 0; i < kitchenData.layers.length; i++) {
                const currentLayer = kitchenData.layers[i];
                const configurationIndex = defaultConfiguration[i];
                const imageSuffix = currentLayer.items[configurationIndex].imgSrc;
                defaultImageSources.push(constants.IMAGE_PREFIX + imageSuffix);
        }
    
        return defaultImageSources;
    }

    PopulateDropDownLists(kitchenData) {
        const layers = kitchenData.layers;
    
        layers[0].items.forEach(item => {
            $("#Layer_1_Select").append(new Option(item.name, item.imgSrc));
        });
    
        layers[1].items.forEach(item => {
            $("#Layer_2_Select").append(new Option(item.name, item.imgSrc));
        });
    
        layers[2].items.forEach(item => {
            $("#Layer_3_Select").append(new Option(item.name, item.imgSrc));
        });

        this.ShowDefaultDropDownSelection(kitchenData);
    }

    ShowDefaultDropDownSelection(kitchenData) {
        const defaultConfig = kitchenData.default_configuration;

        const box1 = document.getElementById('Layer_1_Select');
        box1.value = box1.options[defaultConfig[0]].value;
        const box2 = document.getElementById('Layer_2_Select');
        box2.value = box2.options[defaultConfig[1]].value;
        const box3 = document.getElementById('Layer_3_Select');
        box3.value = box3.options[defaultConfig[2]].value;
    }
}

export const initialiser = new Initialiser();