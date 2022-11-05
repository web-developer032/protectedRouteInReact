import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("HOME AUTH:", auth);
    useEffect(() => {
        console.log("USEEFFECT HOME");
    }, []);
    return <h1>Home</h1>;
}

export default Home;
