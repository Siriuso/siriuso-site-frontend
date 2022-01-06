import { LocalStorage } from "quasar";

export function setDark(state, payload) {
  state.dark = payload;
  LocalStorage.set("dark", payload);
}
