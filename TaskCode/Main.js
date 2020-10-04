const JSON_URL = "https://lab.pikcells.com/code-exercise/data.json";
const IMAGE_PREFIX = "https://lab.pikcells.com/code-exercise/images/";
main();

function main() {
    const kitchenData = JSON.parse(GetJSON(JSON_URL));
    OrderData(kitchenData);
    ShowDefaultConfiguration(kitchenData);
    console.log(kitchenData);

}

function GetJSON(JSON_URL) {
    const httpreq = new XMLHttpRequest();
    httpreq.open("GET", JSON_URL, false);
    httpreq.send(null);

    return httpreq.responseText;
}

function OrderData(kitchenData) {
    kitchenData.layers.forEach(layer => {
        layer.items.sort(function(a, b) {return a.order - b.order});
    });
}

function ShowDefaultConfiguration(kitchenData) {
    const canvas = document.getElementById('kitchenCanvas'),
    context = canvas.getContext('2d');
    const Images = GetImages(kitchenData);

}

function GetImages(kitchenData) {

}

function GetImageSources() {
    
}