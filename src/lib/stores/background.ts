import { writable, derived } from "svelte/store";
import type { Writable } from "svelte/store";
import type { TCursor } from "./cursor";

type Background = {
  id: string;
  name: TCursor;
  thumbnail: string;
  src: string;
  isOpen: boolean;
};

export const Backgrounds: Writable<Background[]> = writable([
  {
    id: crypto.randomUUID(),
    name: "bg-scene",
    thumbnail: "/images/backgrounds/thumbnail-sand-dunes.jpg",
    src: "",
    isOpen: true,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-default",
    thumbnail: "/images/backgrounds/thumbnail-solid.jpg",
    src: "",
    isOpen: false,
  },
  {
    id: crypto.randomUUID(),
    name: "bg-legacy",
    thumbnail: "/images/backgrounds/thumbnail-legacy.jpg",
    src: "",
    isOpen: false,
  },
]);

export const SelectedBackground = derived(
  Backgrounds,
  ($b) => $b.find((b) => b.isOpen) as Background,
);
