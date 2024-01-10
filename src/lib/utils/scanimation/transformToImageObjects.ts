export default function transformToImageObjects(base64Images: string[]) {
  return new Promise((resolve, reject) => {
    try {
      const images = [];
      for (const image of base64Images) {
        const actualImage = document.createElement("img");
        actualImage.src = image;
        images.push(actualImage);
      }
      resolve(images);
    } catch (error) {
      reject(error);
    }
  });
}
