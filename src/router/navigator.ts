import type { NavigateFunction, NavigateOptions, To } from 'react-router-dom';

let navigateFn: NavigateFunction | null = null;
let pendingResolve: ((navigate: NavigateFunction) => void) | null = null;

export const navigatePromise: Promise<NavigateFunction> = new Promise(
  (resolve) => {
    pendingResolve = resolve;
    if (navigateFn) {
      resolve(navigateFn);
      pendingResolve = null;
    }
  },
);

export function setNavigate(fn: NavigateFunction) {
  navigateFn = fn;
  if (pendingResolve) {
    pendingResolve(fn);
    pendingResolve = null;
  }
}

export function getNavigate() {
  return navigateFn;
}

export function navigateTo(to: To, options?: NavigateOptions) {
  navigateFn?.(to, options);
}
