import "./App.css";
import Header from "./components/common/Header";
import DarkModeProvider from "./providers/DarkProvider";

function App() {
    return (
        <>
            <DarkModeProvider>
                <Header />
            </DarkModeProvider>
        </>
    );
}

export default App;
