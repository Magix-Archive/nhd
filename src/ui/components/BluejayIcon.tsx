import AttributableImage from "@components/AttributableImage.tsx";

function BluejayIcon({ className }: { className?: string }) {
    return <AttributableImage id={"bluejay_icon"} src={"../uploaded/bluejay.webp"} alt={"Bluejay"} text={"The icon of Bluejay, Brittany's online screen name."} className={className} />;
}

export default BluejayIcon;
