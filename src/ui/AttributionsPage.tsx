import "@css/AttributionsPage.scss";

function AttributionsPage() {
    return (
        <div id={"credits"} className={"AttributionsPage App_ScrollTo"}>
            <div class={"flex flex-row justify-center w-full h-full p-10 gap-10"}>
                <div class={"AttributionsPage_Container"}>
                    <iframe src="https://drive.google.com/file/d/1KqrcFVvCMvq8h6V-lTyXZxhkZFMvGP70/preview" />
                    <span>Process Paper</span>
                </div>

                <div class={"AttributionsPage_Container"}>
                    <iframe src="https://drive.google.com/file/d/1RMxdxSQz36AcF7TKjD9Weuo7xfzHlZAc/preview" />
                    <span>Annotated Bibliography</span>
                </div>
            </div>

            <div class={"flex flex-row self-center justify-between gap-10"}>
                <div class={"AttributionsPage_Info"}>
                    <span>All images on the site are credited to their owners. Click on them to view the citation.</span>
                    <br />
                    <span>Remaining icons not cited are courtesy of React Icons on NPM.</span>
                    <span>The Poppins font was used in respect to the Google Fonts license.</span>
                    <span>The Windows XP Tahoma font was used in respect to the FontStruction license.</span>
                    <span>The Microsoft Sans Serif font was taken with permission from SpikeHD's website.</span>
                    <span>The Windows 7 theme was used in respect to it's open-source MIT License on GitHub.</span>
                </div>
            </div>
        </div>
    );
}

export default AttributionsPage;
