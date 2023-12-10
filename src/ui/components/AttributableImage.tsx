import "@css/components/AttributableImage.scss";

interface IAttributionProps {
    src: string;
    text: string;
}

function Attribution(props: IAttributionProps) {
    return (
        <div class={"Attribution_Container"}>
            <img src={props.src} alt={props.text} />
            <span>{props.text}</span>
        </div>
    );
}

interface IProps {
    id: string;
    src: string;
    alt?: string;
    text: string;

    style?: any;
    class?: string;
    className?: string;
}

function AttributableImage(props: IProps) {
    const dialog = document.getElementById(`${props.id}.modal`) as HTMLDialogElement;

    return (
        <>
            <img
                draggable={false}
                id={props.id}
                src={props.src}
                alt={props.alt || props.class || props.id}
                style={{
                    ...props.style,
                    cursor: "pointer"
                }}
                class={props.class || props.className}
                onClick={() => dialog.showModal()}
            />

            <dialog class={"Attribution"} id={`${props.id}.modal`}
                    onClick={() => dialog.close()}
            >
                <Attribution src={props.src} text={props.text} />
            </dialog>
        </>
    );
}

export default AttributableImage;
