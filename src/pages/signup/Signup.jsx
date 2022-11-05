import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    console.log("SIGNUP AUTH:", auth);

    useEffect(() => {
        console.log("USEEFFECT SIGNUP");
    }, []);

    return (
        <form>
            <fieldset>
                <legend>Signup</legend>

                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button>Signup</button>
            </fieldset>
        </form>
    );
}

export default Signup;
