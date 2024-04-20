import { writable, derived } from "svelte/store";
import type { Writable } from "svelte/store";
import type { TCursor } from "./cursor";

type Background = {
  id: string;
  name: TCursor;
  thumbnail: {
    light: string;
    dark: string;
  };
  src: string; // what is this for :3
  isOpen: boolean;
};

export const Backgrounds: Writable<Background[]> = writable([
  {
    id: crypto.randomUUID(),
    name: "bg-scene",
    thumbnail: {
      light: "/images/backgrounds/3d-scene-light.webp",
      dark: "/images/backgrounds/3d-scene-dark.webp",
    },
    src: "",
    isOpen: false,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-default",
    thumbnail: {
      light: "/images/backgrounds/thumbnail-solid.jpg",
      dark: "/images/backgrounds/thumbnail-solid.jpg",
    },
    src: "",
    isOpen: true,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-legacy",
    thumbnail: {
      light: "/images/backgrounds/thumbnail-legacy.jpg",
      dark: "/images/backgrounds/thumbnail-legacy.jpg",
    },
    src: "",
    isOpen: false,
  },
]);

export const SelectedBackground = derived(
  Backgrounds,
  ($b) => $b.find((b) => b.isOpen) as Background,
);
