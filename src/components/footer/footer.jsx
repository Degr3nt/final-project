export function Footer() {
    return (
        <div className="grid grid-cols-2 justify-items-between text-gray-400 text-sm">
            <div className="justify-self-start grid grid-rows-3 gap-3">
                <div className="flex flex-row items-center gap-7">
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/github-icon.svg" link="https://github.com/microsoft/vscode"/>
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/x-icon.svg" link="https://go.microsoft.com/fwlink/?LinkID=533687"/>
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/linkedin-icon.svg" link="https://www.linkedin.com/showcase/vs-code" />
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/bluesky-icon.svg" link="https://bsky.app/profile/vscode.dev" />
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/reddit-icon.svg" link="https://www.reddit.com/r/vscode/"/>
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/podcast-icon.svg" link="https://www.vscodepodcast.com/"/>
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/tiktok-icon.svg" link="https://www.tiktok.com/@vscode" />
                    <LogoButton icon="https://code.visualstudio.com/assets/icons/youtube-icon.svg" link="https://www.youtube.com/@code" />
                </div>
                <div className="flex flex-row justify-center items-center gap-7">
                    <p>Support</p>
                    <p>Privacy</p>
                    <p>Managing Cookies</p>
                    <p>Terms of use</p>
                    <p>License</p>
                </div>
                <div className="flex flex-row justify-evenly items-center">
                    <p>Your Privacy Choices</p>
                    <p>Consumer Health Privacy</p>
                </div>
            </div>
            <div className="justify-self-end">
                <LogoButton icon="https://code.visualstudio.com/assets/icons/microsoft.svg" link="https://www.microsoft.com/" />
            </div>
        </div>
    )
}

function LogoButton({icon, link}) {
    return (
        <a href={link} target="_blank">
            <img className='w-6' src={icon}></img>
        </a>
    )
}