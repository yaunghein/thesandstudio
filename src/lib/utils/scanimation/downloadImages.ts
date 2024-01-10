import JSZip from "jszip";

export default function downloadImages(
  name: string,
  canvasEmelents: HTMLCanvasElement[],
) {
  const zip = new JSZip();

  for (const canvas of canvasEmelents) {
    zip.file(
      `${canvas.dataset.name}.png`,
      canvas.toDataURL("image/png").split("base64,")[1],
      { base64: true },
    );
  }

  zip.generateAsync({ type: "blob" }).then((content) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(content);
    downloadLink.download = `${name}-scanimation.zip`;
    downloadLink.click();
  });
}
