import $ from "./jquery.module.js";
import { renderer } from "./Renderer.js";
import { data } from "./KitchenData.js";

class Initialiser {
    Initialise() {
        this.ShowDefaultKitchen();
        this.PopulateDropDownLists();
    }

    ShowDefaultKitchen() {
        const defaultImages = data.GetDefaultImages();
        renderer.RenderKitchen(defaultImages);
    }

    PopulateDropDownLists() {
        const layers = data.GetLayers();
    
        layers[0].items.forEach(item => {
            $("#Layer_1_Select").append(new Option(item.name, item.imgSrc));
        });
    
        layers[1].items.forEach(item => {
            $("#Layer_2_Select").append(new Option(item.name, item.imgSrc));
        });
    
        layers[2].items.forEach(item => {
            $("#Layer_3_Select").append(new Option(item.name, item.imgSrc));
        });

        this.ShowDefaultDropDownSelection();
    }

    ShowDefaultDropDownSelection() {
        const defaultConfig = data.GetDefaultConfiguration();

        const box1 = document.getElementById('Layer_1_Select');
        box1.value = box1.options[defaultConfig[0]].value;
        const box2 = document.getElementById('Layer_2_Select');
        box2.value = box2.options[defaultConfig[1]].value;
        const box3 = document.getElementById('Layer_3_Select');
        box3.value = box3.options[defaultConfig[2]].value;
    }
}

export const initialiser = new Initialiser();