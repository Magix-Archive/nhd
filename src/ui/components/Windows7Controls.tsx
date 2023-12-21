function Windows7Controls() {
    return (
        <div className={"title-bar-controls"}>
            <button aria-label={"Minimize"}></button>
            <button aria-label={"Maximize"} disabled></button>
            <button aria-label={"Close"}></button>
        </div>
    );
}

export default Windows7Controls;
