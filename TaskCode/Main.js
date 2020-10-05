const JSON_URL = "https://lab.pikcells.com/code-exercise/data.json";
const IMAGE_PREFIX = "https://lab.pikcells.com/code-exercise/images/";
main();

function main() {
    const kitchenData = JSON.parse(GetJSON(JSON_URL));
    OrderData(kitchenData);
    ShowDefaultKitchen(kitchenData);

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

function ShowDefaultKitchen(kitchenData) {
    const canvas = document.getElementById('kitchenCanvas'),
    context = canvas.getContext('2d');
    const defaultImages = GetDefaultImages(kitchenData);
    
    defaultImages.forEach(image => {
        image.onload = function() {
            context.drawImage(image, 0, 0)
        }
    })
}

function GetDefaultImages(kitchenData) {
    const imageSources = GetDefaultImageSources(kitchenData);
    const images = [];

    imageSources.forEach(source => {
        const currentImage = new Image();
        currentImage.src = source;
        images.push(currentImage);
    });

    return images;
}

function GetDefaultImageSources(kitchenData) {
    const defaultConfiguration = kitchenData.default_configuration;
    const defaultImageSources = [];

    for (let i = 0; i < kitchenData.layers.length; i++) {
            const currentLayer = kitchenData.layers[i];
            const configurationIndex = defaultConfiguration[i];
            const imageSuffix = currentLayer.items[configurationIndex].imgSrc;
            defaultImageSources.push(IMAGE_PREFIX + imageSuffix);
    }

    return defaultImageSources;
}