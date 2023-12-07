import "@css/components/ImageCollage.scss";

type Rotation = "reverse" | "linear";

interface IProps {
    images: string[];
    scroll: Rotation;
}

function ImageCollage(props: IProps) {
    return (
        <div className={"ImageCollage"}>
            <div class={"ImageCollage_Inner"}
                 style={{ "--dir": props.scroll }}
            >
                {props.images.map((image, index) => (
                    <img key={index} src={image} alt={"Collage Image"} />
                ))}

                {props.images.map((image, index) => (
                    <img key={index} src={image} alt={"Collage Image"} />
                ))}
            </div>
        </div>
    );
}

export default ImageCollage;
