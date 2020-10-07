import $ from "./jquery.module.js";

const JSON_URL = "https://lab.pikcells.com/code-exercise/data.json";
const IMAGE_PREFIX = "https://lab.pikcells.com/code-exercise/images/";
main();

function main() {
    const kitchenData = JSON.parse(GetJSON(JSON_URL));
    OrderData(kitchenData);
    ShowDefaultKitchen(kitchenData);
    ShowDefaultDesignChoices(kitchenData);
    PopulateDropDownLists(kitchenData);
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

function ShowDefaultKitchen(kitchenData) {
    const canvas = document.getElementById('kitchen_Canvas'),
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

function ShowDefaultDesignChoices(kitchenData) {
    const CurrentDesignChoices = GetSelecteRangeNames(kitchenData);
    const designChoices = document.getElementById("Kitchen_Choices");
    designChoices.innerHTML = 
        CurrentDesignChoices[0] + ", " +
        CurrentDesignChoices[1] + ", " + 
        CurrentDesignChoices[2]; 
}

function GetSelecteRangeNames(kitchenData) {
    const defaultConfiguration = kitchenData.default_configuration;
    const defaultLayerName = [];

    for (let i = 0; i < kitchenData.layers.length; i++) {
            const currentLayer = kitchenData.layers[i];
            const configurationIndex = defaultConfiguration[i];
            const LayerName = currentLayer.items[configurationIndex].name;
            defaultLayerName.push(LayerName);
    }

    return defaultLayerName;
}

function PopulateDropDownLists(kitchenData) {
    const layers = kitchenData.layers;

    layers[0].items.forEach(item => {
        $("#Layer_1_Select").append(new Option(item.name, item.imgSrc))
    })

    layers[1].items.forEach(item => {
        $("#Layer_2_Select").append(new Option(item.name, item.imgSrc))
    })

    layers[2].items.forEach(item => {
        $("#Layer_3_Select").append(new Option(item.name, item.imgSrc))
    })

    SetDefaultDropDownOptions(kitchenData);
}

function SetDefaultDropDownOptions(kitchenData) {
    const a = GetSelecteRangeNames(kitchenData);

    
}

document.getElementById("Update_Button").onclick = function() {
    UpdateCanvas();
    UpdateDesignChoices();
    
}

function UpdateCanvas() { // TODO Put in render and merge with show default kitchen 
    const canvas = document.getElementById('kitchen_Canvas'),
    context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const images = GetSelectedImages();

    images.forEach(image => {
        image.onload = function() {
            context.drawImage(image, 0, 0)
        }
    })
}

function UpdateDesignChoices() { //TO DO
    $("p#Kitchen_Choices").text(
        
    );
}

function GetSelectedImages() {
    const imageSources = GetSelectedImageSources();
    const images = [];

    imageSources.forEach(source => {
        const currentImage = new Image();
        currentImage.src = source;
        images.push(currentImage);
    });

    return images;
}

function GetSelectedImageSources() {
    return [
        IMAGE_PREFIX + $("#Layer_1_Select").val(),
        IMAGE_PREFIX + $("#Layer_2_Select").val(),
        IMAGE_PREFIX + $("#Layer_3_Select").val()
    ]
}

// TODO Refactor much of this code and add final bits of functionality.
