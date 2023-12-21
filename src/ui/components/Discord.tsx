import { JSX } from "preact";

import MagixIcon from "@components/MagixIcon.tsx";
import BluejayIcon from "@components/BluejayIcon.tsx";
import AttributableImage from "@components/AttributableImage.tsx";

import { MdClose, MdHeadphones, MdInbox, MdMinimize, MdPeople } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";
import { FaAngleDown, FaHashtag, FaMicrophone } from "react-icons/fa";
import { IoIosNotifications, IoMdSearch } from "react-icons/io";
import { TiPin } from "react-icons/ti";
import { FiHelpCircle } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";

import "@css/components/Discord.scss";

interface ICategoryProps {
    name: string;
    channels: string[];
    selected?: number[];
}

function DiscordCategory(props: ICategoryProps) {
    return (
        <div class={"flex flex-col gap-2"}>
            <div class={"flex flex-row items-center gap-1 text-xs"}>
                <FaAngleDown />
                <span class={"font-bold"}>{props.name.toUpperCase()}</span>
            </div>

            <div class={"flex flex-col ml-1 gap-2"}>
                {props.channels.map((channel, index) => (
                    <div key={index} class={`flex flex-row items-center gap-2 rounded pl-1.5` +
                        `${props.selected?.includes(index) ? " bg-discord-gray-5" : ""}`}
                    >
                        <span class={"text-discord-gray-4 font-bold text-2xl"}>#</span>
                        <span>{channel}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface IMessageProps {
    message: string;
    sender: string;
    time: string;
    profile: JSX.Element;
}

function DiscordMessage(props: IMessageProps) {
    return (
        <div class={"flex flex-row gap-2"}>
            {props.profile}

            <div class={"flex flex-col gap-0.5"}>
                <div class={"flex flex-row gap-2 items-center"}>
                    <span class={"font-semibold text-sm"}>{props.sender}</span>
                    <span class={"text-sm text-discord-gray-4"}>{props.time}</span>
                </div>

                <p class={"text-sm"}>{props.message}</p>
            </div>
        </div>
    );
}

function Discord() {
    return (
        <div className={"Discord App_Margin"}>
            <div class={"Discord_TopBar w-full"}>
                <AttributableImage
                    id={"discord_logo"}
                    text={"Courtesy of Discord"}
                    src={"../uploaded/discord_logo.svg"}
                    class={"w-[70px]"}
                />

                <div class={"flex flex-row gap-1 items-center"}>
                    <MdMinimize />
                    <VscChromeMaximize />
                    <MdClose />
                </div>
            </div>

            <div className={"Discord_Viewport flex flex-row w-full h-full"}>
                <div className={"Discord_Servers gap-2 flex flex-col items-center p-1 bg-discord-black"}>
                    <div class={"Discord_Logo"}>
                        <AttributableImage text={"Courtesy of Discord"} id={"discord_icon"} src={"../uploaded/discord.svg"} />
                    </div>

                    <span className={"border-b-2 border-discord-gray-3 w-3/5"} />

                    <div className={"Discord_Server"} selected={true}>
                        <AttributableImage text={"Courtesy of National History Day"} id={"nhd"} src={"../uploaded/nhd.png"} />
                    </div>
                </div>

                <div className={"Discord_ServerContent flex flex-col bg-discord-gray-2 w-[40%]"}>
                    <div className={"Discord_ServerTitle flex flex-row items-center justify-between p-3 border-b-2 border-discord-black"}>
                        <span class={"text-base font-semibold"}>National History Day</span>
                        <FaAngleDown class={"ml-5"} />
                    </div>

                    <div class={"flex flex-col justify-between h-full"}>
                        <div className={"Discord_ChannelList p-3"}>
                            <DiscordCategory name={"Text Channels"} channels={["general", "off-topic"]} selected={[0]} />
                        </div>

                        <div class={"Discord_UserInfo flex flex-row justify-between bg-discord-gray-8 p-2"}>
                            <div class={"flex flex-row gap-2"}>
                                <MagixIcon className={"w-10 h-10 rounded-full"} />

                                <div class={"flex flex-col justify-center"}>
                                    <span class={"font-bold text-sm"}>Magix</span>
                                    <span class={"text-xs text-discord-gray-4"}>#9994</span>
                                </div>
                            </div>

                            <div class={"flex flex-row text-xl gap-2 items-center pr-2 text-discord-gray-9"}>
                                <FaMicrophone />
                                <MdHeadphones />
                                <RiSettings5Fill />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"Discord_ChannelContent flex flex-col p-2 gap-1 bg-discord-gray-3 w-full h-full"}>
                    <div className={"Discord_ActionBar w-full flex flex-row justify-between pr-1 border-b-2 pb-1 border-discord-gray-2"}>
                        <div className={"Discord_ChannelInfo flex flex-row gap-2 items-center"}>
                            <span class={"text-xl text-discord-gray-4 font-bold"}>#</span>
                            <span class={"font-bold"}>general</span>
                        </div>

                        <div className={"Discord_Actions flex flex-row gap-3 items-center"}>
                            <FaHashtag class={"text-xl"} />
                            <IoIosNotifications class={"text-2xl"} />
                            <TiPin class={"text-2xl"} />
                            <MdPeople class={"text-2xl"} />

                            <div className={"flex flex-row justify-between bg-discord-black pl-2 pr-2 w-1/2 pt-0.5 pb-0.5 rounded items-center text-discord-gray"}>
                                Search

                                <IoMdSearch />
                            </div>

                            <MdInbox class={"text-2xl"} />
                            <FiHelpCircle class={"text-2xl"} />
                        </div>
                    </div>

                    <div className={"Discord_Content flex flex-row justify-between h-full"}>
                        <div className={"Discord_Messages pt-2 flex flex-col w-full pr-2"}>
                            <div class={"Discord_MessageList flex flex-col overflow-y-scroll gap-3 mb-10"}>
                                <DiscordMessage sender={"Magix"} profile={<MagixIcon className={"Discord_Profile"} />}
                                                time={"00:42"} message={"The long-term effects of AIM, as well as its short-term competitors, are still evident today."} />
                                <DiscordMessage sender={"Bluejay"} profile={<BluejayIcon className={"Discord_Profile"} />}
                                                time={"00:44"} message={"According to Spectrm (an analytics company), more than 2.52 billion people use messaging applications on mobile devices daily as of 2021."} />
                                <DiscordMessage sender={"Magix"} profile={<MagixIcon className={"Discord_Profile"} />}
                                                time={"00:52"} message={"The rise of AIM also marked the genesis of consumer internet usage, the creation of better messaging " +
                                    "platforms, and the shift toward digital communication."} />
                                <DiscordMessage sender={"Bluejay"} profile={<BluejayIcon className={"Discord_Profile"} />}
                                                time={"01:06"} message={"People no longer communicate through physical means such as mail, or even in-person."} />
                                <DiscordMessage sender={"Magix"} profile={<MagixIcon className={"Discord_Profile"} />}
                                                time={"01:19"} message={"The long-term effects of AIM, as well as its short-term competitors, are still evident today."} />
                                <DiscordMessage sender={"Bluejay"} profile={<BluejayIcon className={"Discord_Profile"} />}
                                                time={"01:20"} message={"Most of the 1-on-1 and group conversations take place digitally from around the globe."} />
                                <DiscordMessage sender={"Magix"} profile={<MagixIcon className={"Discord_Profile"} />}
                                                time={"01:24"} message={"Mark Donner, a cofounder of AIM, described an experience of telling random strangers that he managed AIM as 'I might as well have said, “Hi, my name is Mick Jagger.”'"} />
                                <DiscordMessage sender={"Bluejay"} profile={<BluejayIcon className={"Discord_Profile"} />}
                                                time={"01:20"} message={"Instant messaging also has commercial uses. A study done in Hong Kong reported that giving WhatsApp to allow students and teachers to communicate helped them to better their learning."} />
                            </div>
                        </div>

                        <div className={"Discord_Users h-[90%] bg-discord-gray-2 p-4 flex flex-col w-[200px] gap-2"}>
                            <span class={"font-bold text-xs text-discord-gray-7"}>ONLINE - 2</span>

                            <div class={"flex flex-row items-center gap-2"}>
                                <MagixIcon className={"Discord_Icon"} />
                                <span class={"text-discord-gray-7 text-xs"}>Magix</span>
                            </div>

                            <div className={"flex flex-row items-center gap-2"}>
                                <BluejayIcon className={"Discord_Icon"} />
                                <span className={"text-discord-gray-7 text-xs"}>Bluejay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Discord;
