import Cabins from "./Component/Cabin/Cabins";
import HomePage from "./Component/Home/HomePage";
import Bookings from "./Component/Booking/Bookings";
import Settings from "./Component/Settings/Settings";
import Users from "./Component/Users/Users";
import UpdatCabins from "./Component/Cabin/UpdatCabins";
import AppLayer from "./Ui/AppLayer";
import {
    createBrowserRouter,
  } from "react-router-dom";

  export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayer />,
      children: [
        { path: '/',element: <div>Home Page</div>},
        { path: "/home", element: <HomePage /> },
        { 
          path: "/cabins", 
          element: <Cabins />,
          children: [
            { path: "edit/:id", element: <UpdatCabins /> }  // Updated path for EditCabins
          ]
        },
        { path: "/bookings", element: <Bookings /> },
        { path: "/settings", element: <Settings /> },
        { path: "/users", element: <Users /> },
        { path: "*", element: <h1>Page Not Found</h1> }
      ],
    },
  ]);