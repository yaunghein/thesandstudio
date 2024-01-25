import { writable, derived } from "svelte/store";
import type { Writable } from "svelte/store";

type Background = {
  id: string;
  name: string;
  thumbnail: string;
  src: string;
  isOpen: boolean;
};

export const Backgrounds: Writable<Background[]> = writable([
  {
    id: crypto.randomUUID(),
    name: "Sand Dunes",
    thumbnail: "/images/backgrounds/thumbnail-sand-dunes.jpg",
    src: "",
    isOpen: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Solid",
    thumbnail: "/images/backgrounds/thumbnail-solid.jpg",
    src: "",
    isOpen: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Legacy",
    thumbnail: "/images/backgrounds/thumbnail-legacy.jpg",
    src: "",
    isOpen: false,
  },
]);

export const SelectedBackground = derived(
  Backgrounds,
  ($b) => $b.find((b) => b.isOpen) as Background,
);
