import { createContext, useContext, type ReactNode } from "react";

const GlazePortalContext = createContext<null>(null);

/** Keeps Glaze tokens available to any overlay rendered outside the local tree. */
export function GlazePortalProvider({ children }: { children: ReactNode }) {
  return <GlazePortalContext.Provider value={null}>{children}</GlazePortalContext.Provider>;
}

export function useGlazePortal() {
  return useContext(GlazePortalContext);
}
