interface FooterProps {
    title: string;
    icon: string;
    blackicon: string;
    path: string;
}

import { Link } from "react-router-dom";

import useDarkMode from "@/hooks/useDarkMode";
import footerContent from "@/lib/footerContent";

function Footer() {
    // const { pathname } = useLocation();
    const { darkMode } = useDarkMode();
    return (
        <footer className="flex justify-around fixed dark:bg-pvBenthicBlack bg-white bottom-0 left-0 right-0 py-4 z-50">
            {/* <footer className="flex justify-around border-t-2 py-3"> */}

            {footerContent.map((item: FooterProps) => (
                <Link key={item.title} to={item.path}>
                    <div
                        key={item.title}
                        className={`flex flex-col items-center justify-center`}
                        // className={`flex flex-col items-center justify-center
                        //         ${pathname === item.path ? "bg-blue-100 dark:bg-blue-900" : ""}`}
                    >
                        {/* Modify logic. do not use blackIcon */}
                        {darkMode ? (
                            <img src={item.icon} alt="" className="w-6" />
                        ) : (
                            <img src={item.blackicon} alt="" className="w-6" />
                        )}
                        <div className="text-xs mt-1 font-normal">{item.title}</div>
                    </div>
                </Link>
            ))}
        </footer>
    );
}

export default Footer;
