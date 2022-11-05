import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("PROPFILE AUTH:", auth);
    useEffect(() => {
        console.log("USEEFFECT PROFILE");
    }, []);

    return <div>Profile</div>;
}

export default Profile;
