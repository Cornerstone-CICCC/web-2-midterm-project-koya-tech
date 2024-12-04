import "./App.css";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import DarkModeProvider from "./providers/DarkProvider";

function App() {
    return (
        <>
            <DarkModeProvider>
                <Header />
                <Home />
            </DarkModeProvider>
        </>
    );
}

export default App;
