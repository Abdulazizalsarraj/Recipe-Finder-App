import Sidebar from "./components/Sidebar"
import HomePage from "./pages/HomePage"
import FavouritesPage from "./pages/FavouritesPage"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'favourites', element: <FavouritesPage /> },
    ],
  },
]);

function App() {


  return (
  
    <RouterProvider router={router} />

  )
}

export default App
