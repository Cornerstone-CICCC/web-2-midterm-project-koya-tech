import { useEffect, useState } from "react";

function ToggleButton() {
    const [darkMode, setDarkMode] = useState(() => {
        // this will return true if darkMode is true in localStorage, otherwise false to set the initial state
        return localStorage.getItem("darkMode") === "false" ? false : true;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode.toString());
    }, [darkMode]);

    function lightModeHandler() {
        setDarkMode(!darkMode);
    }

    return (
        <>
            <button onClick={lightModeHandler}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </>
    );
}

export default ToggleButton;
