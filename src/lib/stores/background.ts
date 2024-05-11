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
  isOpen: boolean;
};

export const Backgrounds: Writable<Background[]> = writable([
  {
    id: crypto.randomUUID(),
    name: "bg-scene",
    thumbnail: {
      light: "/background-thumbnails/3d-scene-light.webp",
      dark: "/background-thumbnails/3d-scene-dark.webp",
    },
    src: "",
    isOpen: false,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-default",
    thumbnail: {
      light: "/background-thumbnails/default-light.webp",
      dark: "/background-thumbnails/default-dark.webp",
    },
    src: "",
    isOpen: true,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-legacy",
    thumbnail: {
      light: "/background-thumbnails/legacy-light.webp",
      dark: "/background-thumbnails/legacy-dark.webp",
    },
    src: "",
    isOpen: false,
  },
]);

export const SelectedBackground = derived(
  Backgrounds,
  ($b) => $b.find((b) => b.isOpen) as Background,
);
