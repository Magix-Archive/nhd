import Slack from "@components/Slack.tsx";

import useTime from "@hooks/useTime.ts";

import "@css/environments/Windows81.scss";
import AttributableImage from "@components/AttributableImage.tsx";

function Windows81() {
    const time = useTime();

    return (
        <div id={"short"} className={"Windows81 App_ScrollTo"}>
            <Slack />

            <div class={"flex flex-row h-full"}>
                <div class={"Windows81_Taskbar"}>
                    <AttributableImage
                        id={"windows81_start"}
                        text={"Courtesy of SiliconANGLE"}
                        src={"../uploaded/81_start.png"}
                        alt={"Windows 8.1 Start"}
                        className={"Windows81_Start"}
                    />

                    <div className={"flex flex-row mr-5"}>
                        <span className={"Windows81_Time"}>{time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Windows81;
