// @ts-ignore
export function extract(imageSrc: string) {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d");
    let hexString = "000000";
    let image = new Image();
    image.src = imageSrc;
    image.onload = function () {
        if (context) {
            context.drawImage(image, 0, 0, 400, 400);
            const imageData = context.getImageData(0, 0, 1, 1);
            console.log("the data is", imageData.data)
            // Converts rgba from getImageData 255 to hex
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

export function getBlurColor(imageSrc: string) {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d");
    let hexString = ""
    let image = new Image();
    image.src = imageSrc;

    image.onload = function () {
        if (context) {
            const width = image.naturalWidth;
            const height = image.naturalHeight;
            console.log(width, height);
            context.drawImage(image, 0, 0, width, height);
            const imageData = context.getImageData(0, 0, 1, 1);
            // Converts rgba from getImageData 255 to hex
            let hex: string = "";
            for (let i = 0; i < 3; i++) { //i <=3 if we want to include the alpha i.e 00 or ff
                hex += (imageData.data[i] | 1 << 8).toString(16).slice(1) //remove first char
            }
            console.log("hex code is", hex);
            hexString = hex;
        }
    }
    return hexString
}
