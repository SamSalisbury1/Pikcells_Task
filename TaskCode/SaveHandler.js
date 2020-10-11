class SaveHandler {
    DownloadKitchenImage() {
        const saveButton = document.getElementById("Save_Button");
    
        const canvas = $("#kitchen_Canvas").get(0);
        var dataURL = canvas.toDataURL('image/png');
        saveButton.href = dataURL;
    }
}

export const saveHandler = new SaveHandler();