import { useEffect, useState } from "preact/hooks";

function useScroll() {
    const [scroll, setScroll] = useState(0);

    const updateScroll = () => {
        const element = document.documentElement;
        const scroll = element.scrollTop / element.clientHeight;
        setScroll(scroll * 100);
    };

    useEffect(() => {
        updateScroll();
    }, []);

    window.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    (window as any).getScroll = () => scroll;

    return scroll;
}

export default useScroll;
