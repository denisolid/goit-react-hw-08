// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "./redux/auth/selectors";

// export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/",
  shouldRedirect = true,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  // If the auth state is refreshing, don't render anything (or you can render a loading spinner)
  if (isRefreshing) {
    return null; // or return <LoadingSpinner /> if you have a loading component
  }

  // If not logged in and should redirect, navigate to the redirectTo route
  if (!isLoggedIn && shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }

  // If logged in, render the component
  return isLoggedIn ? Component : null;
};
