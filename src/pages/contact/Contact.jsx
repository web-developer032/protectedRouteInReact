import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Contact() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("CONTACT AUTH:", auth);
    useEffect(() => {
        console.log("USEEFFECT CONTACT");
    }, []);
    return <h1>Contact</h1>;
}

export default Contact;
