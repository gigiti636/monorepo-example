import ReactDOM from "react-dom/client";
import "common_lib/ui/themes/index.css";
import AppProvider from "./app/providers";
import AppRoutes from "./app/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);
