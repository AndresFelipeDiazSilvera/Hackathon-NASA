import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cards from "../Cards";
import Forms from "../Forms";
import { CropDetail } from "../components/CropDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { id: "Home", path: "", Component: Cards },
      { id: "CropDetail", path: "crop/:id", Component: CropDetail },
      { id: "Form", path: "form", Component: Forms },
    ],
  },
]);
