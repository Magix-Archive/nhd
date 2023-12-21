import { JSX } from "preact";

import BluejayIcon from "@components/BluejayIcon.tsx";
import Windows7Controls from "@components/Windows7Controls.tsx";

import { BiHome } from "react-icons/bi";
import { CiStar } from "react-icons/ci";

import "@css/components/Skype.scss";
import AttributableImage from "@components/AttributableImage.tsx";

interface IContactProps {
    name: string;
    icon: JSX.Element;
    status: JSX.Element;
}

function Contact(props: IContactProps) {
    return (
        <div class={"flex flex-row items-center gap-2"}>
            {props.icon}
            {props.status}
            {props.name}
        </div>
    );
}

function SkypeOnline({ size }: { size: number }) {
    return <AttributableImage
        id={"skype_online"}
        text={"Courtesy of CleanPNG"}
        src={"../uploaded/skype_online.png"}
        alt={"Skype Online"}
        style={{ width: size, height: size, alignSelf: "center" }}
    />
}

interface IMessageProps {
    message: string;
    profile?: JSX.Element;
    time: string;
    receiver: boolean;
}

function SkypeMessage(props: IMessageProps) {
    return (
        <div class={"flex flex-row justify-between w-full pr-1"}>
            <div class={"flex flex-row gap-3 items-center w-full"}>
                {!props.receiver && props.profile}

                <div class={"flex flex-col w-full"}>
                    <span className={"p-1 pl-2 pr-2 text-sm rounded mr-3"}
                          style={{
                              backgroundColor: props.receiver ? "#b7eefd" : "#def7fd",
                              alignSelf: !props.receiver ? "flex-start" : "flex-end"
                          }}
                    >
                    {props.message}
                </span>
                </div>
            </div>

            <span class={"text-skype-light-blue text-xs"}>{props.time}</span>
        </div>
    );
}

function Skype() {
    return (
        <div className={"Skype App_Margin window"}>
            <div class={"title-bar"}>
                <div class={"title-bar-text flex flex-row items-center gap-1"}>
                    <AttributableImage
                        id={"skype_logo"}
                        text={"Courtesy of Wikipedia"}
                        src={"../uploaded/skype_logo.png"}
                        class={"Skype_Logo"}
                        alt={"Skype"}
                    />

                    Skype
                </div>

                <Windows7Controls />
            </div>

            <div class={"Skype_Viewport window-body pl-1 pb-1 pr-1"}>
                <div class={"flex flex-row gap-2 font-medium p-1 border-b-[1px] border-gray"}>
                    <span>Skype</span>
                    <span>Contacts</span>
                    <span>Conversation</span>
                    <span>Call</span>
                    <span>View</span>
                    <span>Tools</span>
                    <span>Help</span>
                </div>

                <div class={"flex flex-row gap-1 w-full"}>
                    <div class={"flex flex-col w-2/5"}>
                        <div class={"flex flex-row bg-skype-blue justify-between p-2 items-center"}>
                            <div class={"flex flex-row gap-2"}>
                                <SkypeOnline size={16} />

                                <span class={"text-sm text-white"}>Magix</span>
                            </div>

                            <BiHome class={"text-white text-xl"} />
                        </div>

                        <div class={"flex flex-col bg-white"}>
                            <div class={"flex flex-row justify-between mb-1"}>
                                <span class={"Skype_Tab"} selected={true}>Contacts</span>
                                <span class={"Skype_Tab"}>Recent</span>
                            </div>

                            <div className={"flex flex-col gap-1"}>
                                <div class={"pt-1 pb-1 pl-3 pr-3 bg-white rounded border-gray border-[1px]"}>
                                    <span class={"opacity-60"}>Search</span>
                                </div>

                                <div className={"flex flex-col border-t-[1px] border-gray p-2"}>
                                    <Contact
                                        icon={<BluejayIcon className={"Skype_Contact"} />}
                                        status={<SkypeOnline size={16} />} name={"Bluejay"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"flex flex-col w-full"}>
                        <div class={"flex flex-row"}>
                            <span class={"Skype_Tab"} selected={true}>Skype Home</span>
                            <span class={"Skype_Tab Skype_Tab_Continue"}>Profile</span>
                            <span class={"Skype_Tab Skype_Tab_Continue"}>Facebook</span>
                        </div>

                        <div className={"flex flex-col bg-white w-full h-full p-1 gap-1"}>
                            <div class={"pl-1 flex flex-row items-center gap-1.5 pb-2 border-b-[1px] border-gray"}>
                                <CiStar class={"text-lg"} />
                                <span className={"text-base"}>Bluejay</span>
                            </div>

                            <div class={"flex flex-row gap-2 border-b-[1px] pb-2"}>
                                <BluejayIcon className={"Skype_Profile"} />

                                <div class={"flex flex-col gap-2"}>
                                    <div class={"flex flex-row gap-1 items-center"}>
                                        <SkypeOnline size={16} />
                                        <span>Online</span>
                                    </div>

                                    <span>01:00 Florida, United States</span>
                                </div>
                            </div>

                            <div className={"flex flex-col gap-3 p-2"}>
                                <SkypeMessage profile={<BluejayIcon className={"Skype_Icon"} />} time={"10:19"} receiver={false}
                                              message={"According to Britannica, in 1971 Murray Turoff, a computer scientist who was a part of the Emergency Management " +
                                                  "Information Systems and Reference Index (EMISARI), created a chat function."}
                                />

                                <SkypeMessage time={"10:22"} receiver={true}
                                              message={"This was done to aid government bodies during emergencies."}
                                />

                                <SkypeMessage profile={<BluejayIcon className={"Skype_Icon"} />} time={"10:24"} receiver={false}
                                              message={"Users had typewriter-like systems that connected to a central computer."}
                                />

                                <SkypeMessage time={"10:27"} receiver={true}
                                              message={"This computer would be the one to facilitate communication between the systems."}
                                />

                                <SkypeMessage profile={<BluejayIcon className={"Skype_Icon"} />} time={"10:28"} receiver={false}
                                              message={"People eventually changed the purpose of EMISARI’s chat function to general communication."}
                                />

                                <SkypeMessage time={"10:28"} receiver={true}
                                              message={"Officially dubbed “Party Line,” users would log into the same computer via phone lines " +
                                                  "where they would be able to read each other’s messages."}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skype;
