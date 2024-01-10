import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

type TCursor = "normal" | "footer" | "footer-close";

export const CursorType: Writable<TCursor> = writable("normal");
