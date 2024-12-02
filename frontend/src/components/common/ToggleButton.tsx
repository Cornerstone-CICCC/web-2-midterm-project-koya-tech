import React, { useEffect, useState } from "react";

function ToggleButton() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true" ? true : false;
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
            <button onClick={lightModeHandler}>{darkMode ? "Dark Mode" : "Light Mode"}</button>
        </>
    );
}

export default ToggleButton;
