import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import type { Swiper } from "swiper";

export const MobileHomeSwiper: Writable<Swiper | null> = writable();
