import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home";
import CatalogPage from "./pages/catalog";
import AboutPage from "./pages/about/AboutPage";
import { useState } from "react";
import { LegalAgeAlert } from "./components/LegalAgeAlert";

export default function App() {
    const [legalAge, setLegalAge] = useState(true);

    if (!legalAge)
        return (
            <>
                <LegalAgeAlert limit={legalAge} SetLimit={setLegalAge} />
            </>
        );

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    );
}
