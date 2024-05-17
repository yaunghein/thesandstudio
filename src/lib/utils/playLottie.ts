import lottie from "lottie-web";

export default function playLottie(node: HTMLDivElement, path: string) {
  lottie.loadAnimation({
    container: node,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path,
  });
}
