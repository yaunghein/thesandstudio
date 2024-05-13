import { writable, derived, get } from "svelte/store";
import type { Writable } from "svelte/store";
import type { TCursor } from "./cursor";

type Background = {
  name: TCursor;
  thumbnail: {
    light: string;
    dark: string;
  };
  isOpen: boolean;
};

export const Backgrounds: Writable<Background[]> = writable([
  {
    name: "bg-scene",
    thumbnail: {
      light: "/background-thumbnails/3d-scene-light.webp",
      dark: "/background-thumbnails/3d-scene-dark.webp",
    },
    src: "",
    isOpen: false,
  },
  {
    name: "bg-default",
    thumbnail: {
      light: "/background-thumbnails/default-light.webp",
      dark: "/background-thumbnails/default-dark.webp",
    },
    src: "",
    isOpen: true,
  },
  {
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

export const changeBackground = (name: TCursor) => {
  Backgrounds.set(
    get(Backgrounds).map((bg) =>
      bg.name === name ? { ...bg, isOpen: true } : { ...bg, isOpen: false },
    ),
  );
};
