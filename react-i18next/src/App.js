import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{t("Welcome to React")}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t("Learn React")}
                </a>

                <button onClick={changeLanguage}>{i18n.language}</button>
            </header>
        </div>
    );
}

export default App;
