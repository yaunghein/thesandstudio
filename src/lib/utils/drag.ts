import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";

export default function drag(node: HTMLDivElement) {
  gsap.registerPlugin(Draggable);
  const drag = new Draggable(node, { bounds: "body" });
  drag.disable();

  node.addEventListener("mouseenter", drag.enable);
  node.addEventListener("mouseleave", drag.disable);

  return {
    destroy() {
      drag.kill();
    },
  };
}
