import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Setting() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("SETTING AUTH:", auth);
    useEffect(() => {
        console.log(" USEEFFECT SETTING");
    }, []);

    return <h1>Profile Setting</h1>;
}

export default Setting;
