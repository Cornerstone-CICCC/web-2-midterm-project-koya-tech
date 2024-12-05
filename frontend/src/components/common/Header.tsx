import ToggleButton from "./ToggleButton";

import useDarkMode from "@/hooks/useDarkMode";

function Header({ title }: { title?: string }) {
    const { darkMode } = useDarkMode();
    return (
        <>
            <header className="max-h-20 flex justify-between items-center dark:bg-pvBenthicBlack">
                {title ? (
                    <h1 className="mx-8 text-2xl font-bold">{title}</h1>
                ) : !darkMode ? (
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
