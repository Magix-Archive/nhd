import WhatsApp from "@components/WhatsApp.tsx";

import useTime from "@hooks/useTime.ts";

import "@css/environments/Windows7.scss";
import AttributableImage from "@components/AttributableImage.tsx";

function Windows7() {
    const time = useTime();

    return (
        <div id={"creation"} className={"Windows7 App_ScrollTo win7"}>
            <WhatsApp />

            <div class={"flex h-full"}>
                <div className={"Windows7_Taskbar Windows7_Aero"}>
                    <AttributableImage
                        text={"Courtesy of https://www.klipartz.com"}
                        id={"windows7_start"}
                        src={"../uploaded/vista_start.png"}
                        alt={"Windows 7 Start"}
                        className={"Windows7_Start"}
                    />

                    <div className={"flex flex-row mr-5"}>
                        <span className={"Windows7_Time"}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Windows7;
