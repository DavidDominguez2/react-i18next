import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

function Welcome() {
    const { t, i18n } = useTranslation(["welcome"]);
    function changeLanguageToEnglish() {
        i18n.changeLanguage("en");
    }
    function changeLanguageToSpanish() {
        i18n.changeLanguage("es");
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p
                    dangerouslySetInnerHTML={{
                        __html: t("title", { name: "i18Next" }),
                    }}
                />
                <p>Idioma actual: {i18n.language} </p>
                <button onClick={changeLanguageToEnglish}>INGLES</button>
                <button onClick={changeLanguageToSpanish}>ESPAÑOL</button>
            </header>
        </div>
    );
}

function App() {
    return (
        <Suspense fallback="Cargando traducciones...">
            <Welcome />
        </Suspense>
    );
}

export default App;
