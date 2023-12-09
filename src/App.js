import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import NotesPage from "./pages/NotesPage";
import SelectedNotePage, { noteLoader } from "./pages/SelectedNotePage";
import CreateNote from "./pages/CreateNote";
import EditPage from "./pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <Navigate to={"/404"} />,
    children: [
      {
        path: "/",
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/notes/add",
        element: <CreateNote />,
      },
      {
        path: "/notes/:id/edit",
        element: <EditPage />,
        loader: noteLoader,
      },
      {
        path: "/notes/:id",
        element: <SelectedNotePage />,
        loader: noteLoader,
      },
      {
        path: "/notes",
        element: <NotesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
