import { useEffect, useState } from "preact/hooks";

function useTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1e3);

        return () => clearInterval(interval);
    }, [setTime]);

    return time.toLocaleTimeString(
        [], { hour: "2-digit", minute: "2-digit" }
    );
}

export default useTime;
