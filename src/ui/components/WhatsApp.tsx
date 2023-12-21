import BluejayIcon from "@components/BluejayIcon.tsx";
import Windows7Controls from "@components/Windows7Controls.tsx";

import { GoPaperclip, GoPlus } from "react-icons/go";
import { HiDotsHorizontal } from "react-icons/hi";

import "@css/components/WhatsApp.scss";
import AttributableImage from "@components/AttributableImage.tsx";
import MagixIcon from "@components/MagixIcon.tsx";

interface IMessageProps {
    message: string;
    time: string;
    isFromMe: boolean;
}

function WhatsAppMessage(props: IMessageProps) {
    return (
        <div class={"WhatsApp_Message"} style={{
            alignSelf: props.isFromMe ? "flex-end" : "flex-start",
            backgroundColor: props.isFromMe ? "#DCF8C6" : "#FFFFFF",
        }}>
            <p>{props.message}</p>
            <span
                style={{ marginTop: "" }}
            >{props.time}</span>
        </div>
    );
}

function WhatsApp() {
    return (
        <div className={"WhatsApp App_Margin window"}>
            <div class={"title-bar"}>
                <div class={"flex flex-row gap-0.5 items-center title-bar-text"}>
                    <AttributableImage
                        id={"whatsapp_logo"}
                        text={"Courtesy of Wikimedia Commons"}
                        src={"../uploaded/whatsapp_logo.png"}
                        className={"WhatsApp_Logo"}
                        alt={"WhatsApp"}
                    />

                    WhatsApp
                </div>

                <Windows7Controls />
            </div>

            <div class={"WhatsApp_Viewport window-body"}>
                <div className={"flex flex-row gap-2 font-medium p-1"}>
                    <span>WhatsApp</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Chat</span>
                    <span>Help</span>
                </div>

                <div class={"flex w-full"}>
                    <div class={"flex flex-col w-1/2 border-r-2 border-whatsapp-gray"}>
                        <div class={"flex flex-row justify-between pl-4 pr-4 pt-4 pb-4 w-full bg-whatsapp-white"}>
                            <div class={"flex flex-row gap-3 items-center"}>
                                <MagixIcon className={"w-10 h-10 rounded-full"} />
                                <span class={"text-sm"}>Magix</span>
                            </div>

                            <div class={"flex flex-row gap-4"}>
                                <GoPlus class={"text-2xl"} />
                                <HiDotsHorizontal class={"text-2xl"} />
                            </div>
                        </div>

                        <div class={"flex flex-col bg-whatsapp-semi-white gap-2 w-full"}>
                            <span className={"border-2 bg-white border-whatsapp-gray opacity-60 mt-2 ml-2 mr-2 pl-2 pt-1 pr-2 pb-1 rounded"}>
                                Search or start new chat
                            </span>

                            <div class={"flex flex-col pr-2"}>
                                <div className={"flex flex-row justify-between"}>
                                    <div className={"flex flex-row gap-2 p-2"}>
                                        <BluejayIcon className={"w-16 rounded-full"} />

                                        <div className={"flex flex-col pt-1 gap-0.5"}>
                                            <span>Bluejay</span>
                                            <span>In 1997, AOL separ...</span>
                                        </div>
                                    </div>

                                    <span className={"text-whatsapp-gray"}>14:05</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class={"flex flex-col w-full"}>
                        <div class={"flex flex-row justify-between border-b-2 border-whatsapp-gray bg-whatsapp-white"}>
                            <div class={"flex flex-row gap-2 items-center p-1"}>
                                <BluejayIcon className={"w-14 rounded-full"} />

                                <div class={"flex flex-col gap-0.5"}>
                                    <span>Bluejay</span>
                                    <span class={"text-gray"}>Last seen today at 14:02</span>
                                </div>
                            </div>

                            <div class={"flex flex-row gap-4 items-center pr-2"}>
                                <GoPaperclip class={"text-2xl"} />
                                <HiDotsHorizontal class={"text-2xl"} />
                            </div>
                        </div>

                        <div class={"WhatsApp_Conversation"}>
                            <WhatsAppMessage message={"Later in the 1970s, publicly available software for instant messaging would emerge."} time={"17:20"} isFromMe={false} />
                            <WhatsAppMessage message={"Software capable of running on the UNIX operating system, “Talk” was designed " +
                                "similarly to “Party Line” with the ability to be run on user computers, rather than on the EMISARI network."} time={"17:21"} isFromMe={true} />
                            <WhatsAppMessage message={"Britannica mentioned that Talk was often combined with “Finger,” additional UNIX software which was used to alert users when " +
                                "a user came online."} time={"17:23"} isFromMe={false} />
                            <WhatsAppMessage message={"At the time, the internet company “America Online” (known as AOL) owned and operated " +
                                "a web browser containing an instant messenger service."} time={"17:25"} isFromMe={true} />
                            <WhatsAppMessage message={"It was an extremely simple proof of concept, similar to Talk and Finger."} time={"17:29"} isFromMe={false} />
                            <WhatsAppMessage message={"In 1997, AOL separated instant messaging from their browser, creating " +
                                "AOL Instant Messenger (known as AIM)."} time={"17:37"} isFromMe={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatsApp;
