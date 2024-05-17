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
      light:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957718/background-thumbnails/3d-scene-light_srgkid.webp",
      dark: "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957718/background-thumbnails/3d-scene-dark_ohdezg.webp",
    },
    src: "",
    isOpen: false,
  },
  {
    name: "bg-default",
    thumbnail: {
      light:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957719/background-thumbnails/default-light_kltga6.webp",
      dark: "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957719/background-thumbnails/default-dark_jo5ohe.webp",
    },
    src: "",
    isOpen: true,
  },
  {
    name: "bg-legacy",
    thumbnail: {
      light:
        "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957721/background-thumbnails/legacy-light_psulku.webp",
      dark: "https://res.cloudinary.com/dlhbpswom/image/upload/v1715957721/background-thumbnails/legacy-dark_obivui.webp",
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
