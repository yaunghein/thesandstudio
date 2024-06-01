import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";

export default function drag(node: HTMLDivElement) {
  gsap.registerPlugin(Draggable);
  const drag = new Draggable(node, {
    bounds: "body",
    allowEventDefault: true,
    allowNativeTouchScrolling: true,
    onPress: function (event) {
      if (event.target.closest(".non-draggable")) {
        this.disable();
        setTimeout(() => this.enable(), 0); // hehe this is working, smell tho
      }
    },
  });
  drag.disable();
  node.addEventListener("mouseenter", drag.enable);
  node.addEventListener("mouseleave", drag.disable);
  return {
    destroy() {
      drag.kill();
    },
  };
}
