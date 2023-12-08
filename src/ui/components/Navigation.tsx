import { JSX } from "preact";

import useScroll from "@hooks/useScroll.ts";

import { IoMdHome } from "react-icons/io";
import { PiSelectionBackground } from "react-icons/pi";
import { FaArrowDownShortWide, FaCoins, FaHammer } from "react-icons/fa6";
import { TbGalaxy } from "react-icons/tb";
import { RiPencilRuler2Fill } from "react-icons/ri";

import { isMobile } from "@app/utils.ts";

import "@css/components/Navigation.scss";

interface ISectionProps {
    icon: JSX.Element;
    title: string;
    section: string;
    style: any;
}

function Section(props: ISectionProps) {
    return !isMobile() ? (
        <span style={props.style} class={"Navigation_Section"}
              onClick={() => {
                  const element = document.getElementById(props.section);
                  element && element.scrollIntoView({ behavior: "smooth" });
              }}
        >
            {props.icon} {props.title}
        </span>
    ) : (
        <a style={props.style}
           href={`#${props.section}`}
           class={"Navigation_Section"}
        >
            {props.icon} {props.title}
        </a>
    );
}

function Navigation() {
    const scroll = useScroll();

    const isAt = (limit: number) => {
        const isWithin = scroll >= limit && scroll <= limit + 100;
        return {
            color: isWithin ? "#0c8ce9" : undefined,
            backgroundColor: isWithin ? "rgba(0, 0, 0, 0.2)" : undefined
        };
    };

    return (
        <div class={"Navigation sticky bg-opacity-50 bg-discord-black top-0 flex flex-row justify-between pl-10 pr-10 z-10"}>
            <Section style={isAt(0)} icon={<IoMdHome />} title={"Home"} section={"home"} />
            <Section style={isAt(100)} icon={<PiSelectionBackground />} title={"Background"} section={"background"} />
            <Section style={isAt(200)} icon={<FaHammer />} title={"Build Up"} section={"buildup"} />
            <Section style={isAt(300)} icon={<TbGalaxy />} title={"The Creation"} section={"creation"} />
            <Section style={isAt(400)} icon={<FaArrowDownShortWide />} title={"Short Term"} section={"short"} />
            <Section style={isAt(500)} icon={<RiPencilRuler2Fill />} title={"Long Term"} section={"long"} />

            <Section style={isAt(600)} icon={<FaCoins />} title={"Attributions"} section={"credits"} />
        </div>
    );
}

export default Navigation;
