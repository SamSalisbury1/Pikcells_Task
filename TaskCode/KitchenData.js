class KitchenData {
    constructor() {
        const kitchenJSON = this.GetJSON();
        const data = this.OrderData(JSON.parse(kitchenJSON));
    }

    GetKitchenDataJSON() {
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
}