import { useContext } from "react";

import DarkModeContext from "@/contexts/DarkModeContext";

function useDarkMode() {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
}

export default useDarkMode;