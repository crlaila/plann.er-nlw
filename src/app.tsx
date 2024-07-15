import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";


const router = createBrowserRouter([
  {
    //qual caminho ele vai digitar na URL
    path: "/",
    //qual elemento será carregado
    element: <CreateTripPage />,
  },
  {
    //qual caminho ele vai digitar na URL
    path: "/trips/:tripId",
    //qual elemento será carregado
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
