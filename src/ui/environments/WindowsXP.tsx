import AOLMessenger from "@components/AOLMessenger.tsx";

import useTime from "@hooks/useTime.ts";

import "@css/environments/WindowsXP.scss";
import AttributableImage from "@components/AttributableImage.tsx";

function WindowsXP() {
    const time = useTime();

    return (
        <div id={"background"} className={"WindowsXP App_ScrollTo"}>
            <AOLMessenger />

            <div class={"flex h-full"}>
                <div className={"WindowsXP_Taskbar"}>
                    <div>
                        <AttributableImage
                            id={"windowsxp_start"}
                            text={"Courtesy of https://spikehd.github.io"}
                            src={"../uploaded/start.png"}
                            alt={"Windows XP Start"}
                            className={"WindowsXP_Start"}
                        />
                    </div>

                    <div className={"WindowsXP_Tray"}>
                        <span className={"WindowsXP_Time"}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WindowsXP;
