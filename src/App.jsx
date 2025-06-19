import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import Dashboard from "./pages/Dashboard";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import RootLayout from "./pages/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
    children: [{ path: "/signin", element: <SignInPage /> }],
  },
  { path: "/signup", element: <SignUpPage /> },
  { path: "/forget-password", element: <ForgetPasswordPage /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/verify-email", element: <VerifyEmailPage /> },
  { path: "/reset-password", element: <ResetPasswordPage /> },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
