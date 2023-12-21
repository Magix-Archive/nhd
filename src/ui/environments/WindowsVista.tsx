import Skype from "@components/Skype.tsx";

import useTime from "@hooks/useTime.ts";

import "@css/environments/WindowsVista.scss";
import AttributableImage from "@components/AttributableImage.tsx";

function WindowsVista() {
    const time = useTime();

    return (
        <div id={"buildup"} className={"WindowsVista App_ScrollTo win7"}>
            <Skype />

            <div class={"flex h-full"}>
                <div class={"WindowsVista_Taskbar WindowsVista_Aero overflow-y-hidden"}>
                    <AttributableImage
                        id={"windowsvista_start"}
                        text={"Courtesy of https://www.klipartz.com"}
                        src={"../uploaded/vista_start.png"}
                        alt={"Windows Vista Start"}
                        className={"WindowsVista_Start"}
                    />

                    <div class={"flex flex-row mr-5"}>
                        <span className={"WindowsVista_Time"}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WindowsVista;
