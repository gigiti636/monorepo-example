import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Fallback } from "common_lib/components/common";

import { MainPage } from "@/pages/MainPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/*",
      element: <MainPage />,
    },
  ]);

  return (
    <Suspense fallback={<Fallback />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRoutes;
