import { writable, type Writable } from "svelte/store";

type TRole = "system" | "user" | "assistant";

export const Messages: Writable<{ role: TRole; content: string }[]> = writable(
  [],
);
