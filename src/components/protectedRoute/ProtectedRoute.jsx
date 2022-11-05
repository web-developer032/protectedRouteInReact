import { useEffect } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";

const ProtectedRoute = ({ isAllowed, redirectedPath = "/", children }) => {
    console.log("PROTECTED AUTH:", isAllowed);
    useEffect(() => {
        console.log("USEEFFECT PROTECTED ");
    }, []);

    if (!isAllowed) {
        return <Navigate to={redirectedPath} replace />;
    }

    return children;

    // INCASE WHEN YOU WANT TO PROTECT ALL SIBLING ROUTES
    // return <Outlet/>

    // INORDER TO WRAPP OTHER COMPONENTS AND AVOID BREAKING THE APP USE THIS INSTEAD.
    // return children ? children : <Outlet />;
};
export default ProtectedRoute;
