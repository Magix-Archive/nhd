import ImageCollage from "@components/ImageCollage.tsx";

import { arrayFill, isMobile, random } from "@app/utils.ts";

import "@css/HomePage.scss";
import "@css/AttributionsPage.scss";

const images = [
    "../uploaded/xp_background.jpg",
    "../uploaded/AIM.svg",
    "../uploaded/close.png",
    "../uploaded/start.png",
    "../uploaded/vista_background.jpg",
    "../uploaded/vista_start.png",
    "../uploaded/skype_logo.png",
    "../uploaded/skype_online.png",
    "../uploaded/seven_background.jpg",
    "../uploaded/whatsapp_logo.png",
    "../uploaded/81_background.jpg",
    "../uploaded/10_background.png",
    "../uploaded/discord_logo.svg"
];

function HomePage() {
    // const scroll = useScroll();
    // const thesisScroll = convertRange(scroll, 0, 25, 0, 100);

    return (
        <div id={"home"} className={"HomePage App_ScrollTo"}>
            <div className={"flex flex-col h-screen justify-center gap-10"}>
                <div className={"HomePage_Title HomePage_Background"}>
                    <h1>The Instant Messenger Revolution</h1>
                    <h2>Communication. Reimagined.</h2>

                    <h3>National History Day 2023</h3>
                </div>

                <div class={"flex flex-row justify-center gap-10"}>
                    <div className={"HomePage_Thesis HomePage_Background flex flex-col self-center text-center w-1/2 gap-2"}>
                        <h2>Thesis</h2>
                        <p className={"text-2xl"} style={{ /* translate: `${Math.min(-150 + thesisScroll, 0)}% 0` */ }}>
                            In the early 2000s, the internet was still evolving. In 1971,
                            Murray Turoff developed a system for sending messages with little
                            to no delay during times of need. With additional adaptation and innovation,
                            people began to shift away from traditional means of communication to digital
                            internet-based text communication.
                        </p>
                    </div>
                </div>

                <div class={"flex flex-row justify-center"}>
                    <div className={"HomePage_Background AttributionsPage_Info"}>
                        <span>Kobe Do</span>
                        <span>Senior Division</span>
                        <span>Individual Website</span>
                        <span>Process Paper Word Count: 444</span>
                        <span>Student-Composed Words: 1111</span>
                        <span>Multimedia Length: 0:00</span>
                    </div>
                </div>
            </div>

            {
                !isMobile() && (
                    <div className={"HomePage_Collage"}>
                        <div className={"flex flex-col justify-between w-screen"}>
                            {arrayFill(8, null).map((_, index) =>
                                <ImageCollage key={index} images={random(images)}
                                              scroll={index % 2 ? "reverse" : "linear"} />
                            )}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default HomePage;
