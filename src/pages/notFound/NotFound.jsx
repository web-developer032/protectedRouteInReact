import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function NotFound() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("NOT FOUND AUTH:", auth);
    useEffect(() => {
        console.log(" USEEFFECT NOT FOUND");
    }, []);

    return <h1>Page Not Found</h1>;
}

export default NotFound;
