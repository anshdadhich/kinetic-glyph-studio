import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlazePortalProvider } from "./components/glaze/GlazePortalProvider.tsx";
import "./index.css";
import "./glaze.css";

createRoot(document.getElementById("root")!).render(
  <div className="glaze min-h-dvh bg-page text-text-1">
    <GlazePortalProvider>
      <App />
    </GlazePortalProvider>
  </div>
);
