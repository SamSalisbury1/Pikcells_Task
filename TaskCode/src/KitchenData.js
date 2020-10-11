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

    GetLayers() {
        return this.data.layers;
    }

    GetDefaultConfiguration() {
        return this.data.default_configuration;
    }

    GetImageSources() {
        return [
            constants.IMAGE_PREFIX + $("#Layer_1_Select").val(),
            constants.IMAGE_PREFIX + $("#Layer_2_Select").val(),
            constants.IMAGE_PREFIX + $("#Layer_3_Select").val()
        ]
    }
}

export const data = new KitchenData();