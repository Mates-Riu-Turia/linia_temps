import { React, useState } from "react";
import { useTranslation } from 'react-i18next';

function Nav({ t, changeLanguage }) {
    const [state, setState] = useState(" " + t("chooseLang"));

    function changeLanguageCa() {
        changeLanguage("ca");
        setState(" CA");
    }

    function changeLanguageEs() {
        changeLanguage("es");
        setState(" ES");
    }

    function changeLanguageEn() {
        changeLanguage("en");
        setState(" EN")
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-1" />
                    {t("title")}
                </a>
                <div className="dropdown me-4">
                    <button className="btn btn-secondary dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-globe-americas"></i><span id="langSelector">{state}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageCa}>Valencià/Català</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEs}>Castellano</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEn}>English</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function AgeSelector({t, setAppState}) {
    function handleSubmit(e) {
        e.preventDefault();
        const ageSelector = document.getElementById("ageSelector");
        const age = ageSelector.options[ageSelector.selectedIndex].value;
        setAppState(age);
    }

    return (
        <form className="d-flex align-items-center position-absolute top-50 start-50 translate-middle w-75 h-50 bg-body-tertiary rounded-5" onSubmit={handleSubmit}>
            <h2 className="text-center mt-3">{t("ageSelectorText")}</h2>
            <select id="ageSelector" className="form-select" label="Choose an age">
                <option value="timelineAncientAge">{t("ancientAge")}</option>
                <option value="timelineMedievalAge">{t("medievalAge")}</option>
                <option value="timelineModernAge">{t("modernAge")}</option>
                <option value="timelineContemporaryAge">{t("contemporaryAge")}</option>
            </select>
            <button type="submit" className="btn btn-success fixed-bottom w-100 mb-5" id="startButtonText">{t("ageButton")}</button>
        </form>
    );
}

function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-0 ms-2 text-body-secondary">© 2023 Departament de Matemàtiques</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src="favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            </a>
        </footer>
    );
}

export default function App() {
    const { t, i18n } = useTranslation();
    const [state, setState] = useState("AgeSelection");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <>
            <Nav t={t} changeLanguage={changeLanguage} />
            {
                (state == "AgeSelection" ? <AgeSelector t={t} setAppState={setState} /> :  <h1>Help</h1>)
            }
            <Footer t={t} />
        </>
    );
}