import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/**
 * True only after the client has hydrated. Used to guard rendering that
 * depends on browser-only state (e.g. resolved theme) without a
 * setState-in-effect cascade.
 */
export function useMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
