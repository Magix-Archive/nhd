import AttributableImage from "@components/AttributableImage.tsx";

function MagixIcon({ className }: { className?: string }) {
    return <AttributableImage id={"magix_icon"} src={"../uploaded/magix.png"} alt={"Magix"} text={"The icon of Magix, Kobe's online screen name."} className={className} />
}

export default MagixIcon;
