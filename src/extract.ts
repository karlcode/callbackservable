// @ts-ignore
export function extract(imageSrc: string) {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d");
    let hexString = "000000";
    let image = new Image();
    image.src = imageSrc;
    image.onload = function () {
        if (context) {
            const height = image.naturalHeight
            const width = image.naturalWidth
            context.drawImage(image, 0, 0, width, height);
            blurCanvas(context);
            const imageData = context.getImageData(0, 0, 1, 1);
            console.log("the data is", imageData.data)
            // Converts rgba from getImageData 255 to hex

            constructHistogram(context, height, width)
            let hex: string = "";
            for (let i = 0; i < 3; i++) { //i <=3 if we want to include the alpha i.e 00 or ff
                hex += (imageData.data[i] | 1 << 8).toString(16).slice(1) //remove first char
            }
            console.log("hex code is", hex);
            hexString = hex;
        }
    }
    return hexString;
}

function constructHistogram(context: CanvasRenderingContext2D, height: number, width: number) {
    const length = context.getImageData(0,0, width, height).data.length;
    console.log(length)
    // For every x pixels, construct rgb chart and return
    for(let i = 0; i < length; i+1000) {

    }

}

export function blurCanvas(context: CanvasRenderingContext2D) {
    context.globalAlpha = 0.3;
    return context

}
