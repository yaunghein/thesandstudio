export default function drawBars(
  canvas: HTMLCanvasElement,
  images: any[],
  px: number,
) {
  const ctx = canvas.getContext("2d");
  const imagesCount = images.length;
  const barsCount = Math.ceil(canvas.width / images.length);

  for (const i of [...Array(barsCount).keys()]) {
    ctx!.fillStyle = "#000";
    ctx!.fillRect(
      i * imagesCount * px,
      0,
      imagesCount * px - px,
      images[0].naturalHeight,
    );
  }
}
