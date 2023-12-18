import BluejayIcon from "@components/BluejayIcon.tsx";
import MagixIcon from "@components/MagixIcon.tsx";
import AttributableImage from "@components/AttributableImage.tsx";

import "@css/components/AOLMessenger.scss";

interface ITextProps {
    from: string;
    text: string;
    receiver: boolean;
}

function Text(props: ITextProps) {
    return (
        <span className={"AOLMessenger_Text"}>
            <span class={"font-bold"}
                  style={{ color: props.receiver ? "#fc0000" : "#0000ff" }}
            >{props.from}: </span>
            <span>{props.text}</span>
        </span>
    );
}

function AOLMessenger() {
    return (
        <div className={"AOLMessenger"}>
            <div class={"AOLMessenger_TopBar"}>
                <div class={"flex flex-row pl-1 gap-2"}>
                    <AttributableImage
                        id={"aolmessenger_icon"}
                        text={"Courtesy of the Animator vs. Animation Wiki on Fandom"}
                        src={"../uploaded/AIM.svg"}
                        alt={"AOL Messenger"}
                        className={"AOLMessenger_Icon"}
                    />

                    <span class={"AOLMessenger_Title"}>Magix : Bluejay - Instant Message</span>
                </div>

                <AttributableImage
                    id={"aolmessenger_close"}
                    text={"Courtesy of https:/spikehd.github.io"}
                    src={"../uploaded/close.png"}
                    alt={"Windows XP Close"}
                    className={"AOLMessenger_Close"}
                />
            </div>

            <div class={"AOLMessenger_Viewport"}>
                <div>
                    <div className={"AOLMessenger_Actions text-black"}>
                        <span>File</span>
                        <span>Edit</span>
                        <span>Insert</span>
                        <span>People</span>
                    </div>

                    <div className={"mt-2.5 flex flex-col gap-[10px]"}>
                        <div className={"flex flex-row gap-2"}>
                            <div className={"AOLMessenger_Profile bg-blue-500 h-[160px]"}>
                                <BluejayIcon className={"AOLMessenger_ProfileIcon"} />
                            </div>

                            <div className={"AOLMessenger_TextBox p-1 h-[158px]"}>
                                <Text from={"Magix"} receiver={false}
                                      text={"Prior to the internet, smaller intranets, or small computer-to-computer networks existed."} />
                                <Text from={"Bluejay"} receiver={true}
                                      text={"According to Britannica: one of these intranets, belonging to MIT, had a system allowing users within the network to communicate with each other."} />
                                <Text from={"Magix"} receiver={false}
                                      text={"This network created in 1961 would grow to involve multiple American colleges, making MIT’s intranet the first to have modern-day instant messenger functionality."} />
                            </div>
                        </div>

                        <div className={"flex flex-row gap-2"}>
                            <div className={"AOLMessenger_Profile bg-green-400 h-[150px]"}>
                                <MagixIcon className={"AOLMessenger_ProfileIcon"} />
                            </div>

                            <div className={"flex flex-col gap-2"}>
                                <div className={"AOLMessenger_Modifiers gap-1"}>
                                    <div class={"AOLMessenger_ModifierList"}>
                                        <AttributableImage text={"Courtesy of VOX"} id={"text"} src={"../uploaded/text.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"text2"} src={"../uploaded/text2.png"} />
                                    </div>

                                    <div class={"AOLMessenger_ModifierList"}>
                                        <AttributableImage text={"Courtesy of VOX"} id={"usb"} src={"../uploaded/usb.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"blacktext"} src={"../uploaded/black_text.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"usbtext"} src={"../uploaded/usb_text.png"} />
                                    </div>

                                    <div class={"AOLMessenger_ModifierList"}>
                                        <AttributableImage text={"Courtesy of VOX"} id={"bold"} src={"../uploaded/bold.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"italics"} src={"../uploaded/italics.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"underlined"} src={"../uploaded/underlined.png"} />
                                    </div>

                                    <div class={"AOLMessenger_ModifierList"}>
                                        <AttributableImage text={"Courtesy of VOX"} id={"hyperlink"} src={"../uploaded/hyperlink.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"people"} src={"../uploaded/people.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"happymail"} src={"../uploaded/happymail.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"emojis"} src={"../uploaded/emojis.png"} />
                                    </div>

                                    <div class={"AOLMessenger_ModifierList"}>
                                        <AttributableImage text={"Courtesy of VOX"} id={"addfriend"} src={"../uploaded/add_friend.png"} />
                                        <AttributableImage text={"Courtesy of VOX"} id={"tv"} src={"../uploaded/tv.png"} />
                                    </div>

                                </div>

                                <div className={"AOLMessenger_TextBox h-[121px]"}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class={"AOLMessenger_Interactions p-4 text-black justify-between"}>
                    <div class={"flex flex-row gap-5 items-center"}>
                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"warn"} src={"../uploaded/warn.png"} />
                            <span>Warn</span>
                        </div>

                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"block"} src={"../uploaded/block.png"} />
                            <span>Block</span>
                        </div>
                    </div>

                    <div class={"flex flex-row gap-10 items-center w-full justify-center"}>
                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"expressions"} src={"../uploaded/expressions.png"} />
                            <span>Expressions</span>
                        </div>

                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"games"} src={"../uploaded/games.png"} />
                            <span>Games</span>
                        </div>

                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"video"} src={"../uploaded/video.png"} />
                            <span>Video</span>
                        </div>

                        <div className={"AOLMessenger_Interaction"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"talk"} src={"../uploaded/talk.png"} />
                            <span>Talk</span>
                        </div>
                    </div>

                    <div class={"object-contain"}>
                        <div class={"flex flex-col"}>
                            <AttributableImage text={"Courtesy of VOX"} id={"send"} class={"max-h-10 w-10"} src={"../uploaded/send.png"} />
                            <AttributableImage text={"Courtesy of VOX"} id={"send_bar"} class={"max-h-10 w-10"} src={"../uploaded/send_n.png"} />
                        </div>

                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AOLMessenger;
