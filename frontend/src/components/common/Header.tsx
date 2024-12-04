import ToggleButton from "./ToggleButton";

import useDarkMode from "@/hooks/useDarkMode";

function Header() {
    const { darkMode } = useDarkMode();
    return (
        <>
            <header className="max-h-20 flex justify-between items-center dark:bg-pvBenthicBlack">
                {!darkMode ? (
                    <img
                        src="Amazon_Prime_Video_logo_black.svg"
                        alt="Amazon_Prime_Video_logo_black"
                        className="m-4"
                    />
                ) : (
                    <img
                        src="Amazon_Prime_Video_logo.svg"
                        alt="Amazon_Prime_Video_logo"
                        className="m-4"
                    />
                )}

                <div className="flex items-center">
                    <ToggleButton />
                    <img
                        src="account-circle.svg"
                        alt="account-circle"
                        className="max-h-16 max-w-16 m-4"
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
