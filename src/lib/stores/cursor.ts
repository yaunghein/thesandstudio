import { writable, get } from "svelte/store";
import type { Writable } from "svelte/store";

export type TCursor =
  | "normal"
  | "contact"
  | "footer-close"
  | "a-chon-lyy"
  | "upload-files"
  | "remove-files"
  | "bg-scene"
  | "bg-default"
  | "bg-legacy"
  | "loading"
  | "work-slider";

export const CursorType: Writable<TCursor> = writable("normal");

export const changeCursorType = (
  node: HTMLElement,
  { inType, outType }: { inType: TCursor; outType: TCursor },
) => {
  const handleMouseEnter = () =>
    get(CursorType) !== "loading" && CursorType.set(inType);
  const handleMouseLeave = () =>
    get(CursorType) !== "loading" && CursorType.set(outType);
  node.addEventListener("mouseenter", handleMouseEnter);
  node.addEventListener("mouseleave", handleMouseLeave);
  return {
    destroy() {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    },
  };
};
