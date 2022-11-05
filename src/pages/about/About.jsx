import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function About() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("ABOUT AUTH:", auth);

    useEffect(() => {
        console.log("USEEFFECT ABOUT");
    }, []);
    return <h1>About</h1>;
}

export default About;
