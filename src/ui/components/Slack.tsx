import { JSX } from "preact";

import { IoIosMenu, IoMdPeople, IoMdSearch } from "react-icons/io";
import { IoArrowBack, IoArrowForward, IoChatbubbleEllipses, IoDocuments } from "react-icons/io5";
import { CiCircleInfo, CiClock2, CiStar } from "react-icons/ci";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdAlternateEmail, MdClose, MdMinimize } from "react-icons/md";
import { VscChromeMaximize } from "react-icons/vsc";
import { FaArrowDown, FaCaretDown, FaCircle } from "react-icons/fa";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FiAlignLeft } from "react-icons/fi";

import BluejayIcon from "@components/BluejayIcon.tsx";

import "@css/components/Slack.scss";
import { GoPin } from "react-icons/go";
import MagixIcon from "@components/MagixIcon.tsx";

interface ICategoryProps {
    name: string;
    channels: string[];
}

function SlackCategory(props: ICategoryProps) {
    return (
        <div class={"flex flex-col gap-1"}>
            <div class={"flex flex-row gap-1.5 items-center"}>
                <FaCaretDown />
                <span>{props.name}</span>
            </div>

            <div class={"flex flex-col ml-3"}>
                {props.channels.map((channel, index) =>
                    <span key={index}># {channel}</span>
                )}
            </div>
        </div>
    );
}

interface IMessageProps {
    profile: JSX.Element;
    name: string;
    time: string;
    message: string;
}

function SlackMessage(props: IMessageProps) {
    return (
        <div class={"flex flex-row gap-1"}>
            {props.profile}

            <div class={"flex flex-col"}>
                <div class={"text-sm flex flex-row items-center text-center gap-2"}>
                    <span class={"font-bold"}>{props.name}</span>
                    <span class={"text-whatsapp-gray text-xs"}>{props.time}</span>
                </div>

                <p>{props.message}</p>
            </div>
        </div>
    );
}

function Slack() {
    return (
        <div className={"Slack App_Margin flex flex-col w-1/2"}>
            <div class={"Slack_TopBar flex justify-between flex-row w-full items-center"}>
                <IoIosMenu class={"flex flex-row"} />

                <div class={"flex flex-row w-full justify-center gap-5"}>
                    <div className={"flex flex-row justify-between items-center gap-3"}>
                        <div className={"flex flex-row gap-2"}>
                            <IoArrowBack />
                            <IoArrowForward />
                        </div>

                        <CiClock2 />
                    </div>

                    <span
                        className={"flex flex-row self-center justify-between items-center text-sm pl-1 " +
                            "pr-1 pt-0.5 pb-0.5 border-2 border-whatsapp-gray text-whatsapp-gray rounded-l w-1/3"}
                    >
                        Search seiKiMo Inc.

                        <IoMdSearch />
                    </span>
                </div>

                <div className={"flex flex-row gap-2"}>
                    <FaRegCircleQuestion />
                    <MdMinimize />
                    <VscChromeMaximize />
                    <MdClose />
                </div>
            </div>

            <div class={"Slack_Viewport flex flex-row w-full"}>
                <div class={"flex flex-row bg-slack-purple w-3/4"}>
                    <div className={"Slack_Teams flex flex-col gap-2 p-2 border-r-[1px] border-slack-divider"}>
                        <span
                            className={"flex flex-col text-2xl font-medium rounded text-center justify-center bg-blue-500 w-12 h-12"}
                        >
                            SI
                        </span>
                    </div>

                    <div className={"Slack_TeamInfo flex flex-col w-full"}>
                        <div className={"Slack_Team flex flex-row justify-between p-2 border-b-[1px] border-slack-divider"}>
                            <div className={"flex flex-col gap-0.5"}>
                                <span className={"font-medium"}>seiKiMo Inc.</span>

                                <div className={"flex flex-row gap-2 items-center text-sm"}>
                                    <FaCircle class={"text-green-500"} />
                                    <span className={"text-whatsapp-tan"}>Kobe Do</span>
                                </div>
                            </div>

                            <HiOutlinePencilSquare class={"rounded-full w-10 h-10 p-2 bg-white text-slack-purple text-3xl mr-2"} />
                        </div>

                        <div className={"Slack_Shortcuts flex flex-col gap-1 border-b-[1px] border-slack-divider p-4 pl-3"}>
                            <span>
                                <FiAlignLeft />
                                All unreads
                            </span>

                            <span>
                                <IoChatbubbleEllipses />
                                Threads
                            </span>

                            <span>
                                <MdAlternateEmail />
                                Mentions & reactions
                            </span>

                            <span>
                                <IoDocuments />
                                Drafts
                            </span>

                            <span>
                                <FaArrowDown />
                                Show More
                            </span>
                        </div>

                        <div className={"Slack_ChannelList flex flex-col gap-3 p-4"}>
                            <SlackCategory name={"Channels"} channels={["general"]} />
                        </div>
                    </div>
                </div>

                <div class={"Slack_Content flex flex-col p-2 bg-white text-black w-full"}>
                    <div class={"Slack_ChannelInfo flex flex-row justify-between items-center border-b-[2px] border-lite pl-1 pr-1"}>
                        <div className={"flex flex-col w-full"}>
                            <div class={"flex flex-row items-center gap-2"}>
                                <span>#general</span>
                                <CiStar class={"text-lg"} />
                            </div>

                            <div className={"flex flex-row gap-3"}>
                                <div class={"flex flex-row gap-1 pr-3 items-center border-r-[2px] border-lite"}>
                                    <IoMdPeople />
                                    <span>2</span>
                                </div>

                                <div className={"flex flex-row gap-1 items-center pr-3 border-r-[2px] border-lite"}>
                                    <GoPin />
                                    <span>2</span>
                                </div>

                                <span>Discuss the instant messenger revolution!</span>
                            </div>
                        </div>

                        <CiCircleInfo class={"text-lg"} />
                    </div>

                    <div class={"Slack_ChannelMessages flex flex-col gap-1 pt-1 pb-1"}>
                        <SlackMessage
                            profile={<BluejayIcon className={"Slack_ProfileIcon"} />}
                            name={"Brittany Shen"} time={"6:08 PM"}
                            message={"AIM was a commercial success, sparking the desire in people around the world for access " +
                                "to the internet and better telecommunications software."}
                        />

                        <SlackMessage
                            profile={<MagixIcon className={"Slack_ProfileIcon"} />}
                            name={"Kobe Do"} time={"6:10 PM"}
                            message={"As with many commercial successes, AIM inspired other companies to create spinoffs " +
                                "to ride the instant messenger hype."}
                        />

                        <SlackMessage
                            profile={<BluejayIcon className={"Slack_ProfileIcon"} />}
                            name={"Brittany Shen"} time={"6:15 PM"}
                            message={"AIM was the first instant messenger for most people, and it also affected the way people thought about their computers."}
                        />

                        <SlackMessage
                            profile={<MagixIcon className={"Slack_ProfileIcon"} />}
                            name={"Kobe Do"} time={"6:29 PM"}
                            message={"One reporter from Vox mentioned that people began to react when they heard the various sound effects that AIM would play when a user came online, or when a message was exchanged between two users."}
                        />
                    </div>

                    <div class={"flex flex-row w-full h-full"}>
                        <div class={"Slack_MessageBox flex self-end border-2 border-really-gray rounded w-full"}>
                            <span class={"p-1.5 pt-1 pb-1 opacity-50"}>Message #general</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slack;
