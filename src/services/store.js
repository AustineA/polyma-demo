import { proxy } from "valtio";
import { labels } from "./labels";

export const state = proxy({
  locale: "en",
  labels,
});
