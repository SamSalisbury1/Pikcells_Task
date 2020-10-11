import $ from "./jquery.module.js";
import { renderer } from "./Renderer.js";
import { data } from "./KitchenData.js";

class Initialiser {
    Initialise() {
        this.PopulateDropDownLists();
        this.ShowDefaultKitchen();
    }

    ShowDefaultKitchen() {
        renderer.RenderKitchen();
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

        const layer1Select = document.getElementById('Layer_1_Select');
        layer1Select.value = layer1Select.options[defaultConfig[0]].value;
        const layer2Select = document.getElementById('Layer_2_Select');
        layer2Select.value = layer2Select.options[defaultConfig[1]].value;
        const layer3Select = document.getElementById('Layer_3_Select');
        layer3Select.value = layer3Select.options[defaultConfig[2]].value;
    }
}

export const initialiser = new Initialiser();