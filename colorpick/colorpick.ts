export default function colorpick(image: HTMLImageElement): string {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    let context: CanvasRenderingContext2D = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    return "average of all pixels | dominant pixel color";
}
