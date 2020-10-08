class Renderer{
    RenderKitchen(images) {
        const canvas = $("#kitchen_Canvas").get(0),
        context = canvas.getContext('2d');
    
        images.forEach(image => {
            image.onload = function() {
                context.drawImage(image, 0, 0)
            }
        })
    }

    ClearKitchen() {
        const canvas = $("#kitchen_Canvas").get(0),
        context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
}

export const renderer = new Renderer();