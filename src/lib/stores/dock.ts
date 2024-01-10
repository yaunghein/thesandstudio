import { writable } from "svelte/store";

import { addShell } from "./shell";

// types
import type { Writable } from "svelte/store";
import type { MouseEventHandler } from "svelte/elements";

type DockItem = {
  id: string;
  image: string;
  callback: MouseEventHandler<HTMLButtonElement>;
};

type DockItems = DockItem[];

export const DockItems: Writable<DockItems> = writable([
  {
    id: "mail",
    image: "/images/mail.png",
    callback: () => addShell({ id: "finder", zIndex: 65 }),
  },
  {
    id: "book",
    image: "/images/book.png",
    callback: () => console.log("clicked book"),
  },
  {
    id: "calendar",
    image: "/images/calendar.png",
    callback: () => console.log("clicked calendar"),
  },
  {
    id: "map",
    image: "/images/map.png",
    callback: () => console.log("clicked map"),
  },
]);

export const addDockItem = (item: DockItem) => {
  DockItems.update((items) => [...items, item]);
};
