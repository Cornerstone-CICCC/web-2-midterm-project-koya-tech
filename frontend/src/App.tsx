import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./components/about/About";
import Chat from "./components/chat/Chat";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import DarkModeProvider from "./providers/DarkProvider";

function App() {
    return (
        <>
            <DarkModeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Footer />
            </DarkModeProvider>
        </>
    );
}

export default App;
