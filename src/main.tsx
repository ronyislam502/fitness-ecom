import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { Toaster } from "sonner";
import router from "./routers/router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="max-w-7xl mx-auto">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
    <Toaster />
  </React.StrictMode>
);
