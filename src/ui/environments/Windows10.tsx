import useTime from "@hooks/useTime.ts";

import Discord from "@components/Discord.tsx";

import "@css/environments/Windows10.scss";
import AttributableImage from "@components/AttributableImage.tsx";

function Windows10() {
    const time = useTime();

    return (
        <div id={"long"} className={"Windows10 App_ScrollTo"}>
            <Discord />

            <div className={"flex flex-row h-full"}>
                <div className={"Windows10_Taskbar"}>
                    <AttributableImage
                        id={"windows10_start"}
                        text={"Courtesy of SiliconANGLE"}
                        class={"Windows10_Start"}
                        src={"../uploaded/81_start.png"}
                    />

                    <span class={"Windows10_Time"}>{time}</span>
                </div>
            </div>
        </div>
    );
}

export default Windows10;
