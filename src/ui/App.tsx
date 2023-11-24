import HomePage from "@ui/HomePage.tsx";

import WindowsXP from "@environments/WindowsXP.tsx";
import WindowsVista from "@environments/WindowsVista.tsx";
import Windows7 from "@environments/Windows7.tsx";
import Windows81 from "@environments/Windows81.tsx";
import Windows10 from "@environments/Windows10.tsx";

import Navigation from "@components/Navigation.tsx";
import AttributionsPage from "@ui/AttributionsPage.tsx";

import "@css/App.scss";
import "@css/Text.scss";

import "7.css/dist/7.scoped.css";
import { isMobile } from "@app/utils.ts";

function App() {
    if (isMobile() && !window.location.href.includes("localhost")) {
        return (
            <div class={"flex h-screen items-center text-center"}>
                Sorry! This webpage isn't optimized for mobile devices. Please use a desktop computer to view this webpage.
            </div>
        );
    }

    return (
        <div class={"App"}>
            <Navigation />

            <HomePage />
            <WindowsXP />
            <WindowsVista />
            <Windows7 />
            <Windows81 />
            <Windows10 />

            <AttributionsPage />
        </div>
    );
}

export default App;
