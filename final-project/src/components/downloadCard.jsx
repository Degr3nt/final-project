import {Link} from "react-router-dom"


export function DownloadCard() {
    return (
        <div className='relative rounded-lg py-4 bg-[#1c1f24] flex flex-col gap-4 items-center justify-center'>
            <div className="mt-8 relative flex flex-col items-center justify-center self-center w-100">
                <DownloadButton />
            </div>
            <div className="mt-8 text-white text-xs items-center justify-center flex flex-col gap-3">
                <p>
                    <a className="underline" href="https://vscode.dev/" target="_blank" rel="noopener" title="For quick code edits locally or remotely on GitHub and Azure Repos." aria-label="VS Code for the Web, for quick code edits locally or remotely (opens in new tab)" id="download-buttons-web">Web</a>, <a className="underline" href="/insiders" id="download-buttons-insiders" aria-label="Download VS Code Insiders edition">Insiders edition</a>,
                    or <a className="underline" href="/Download" aria-label="Download VS Code for other platforms">other platforms</a>
                </p>
                <p class="terms">
                    By using VS Code, you agree to its <span class="wrap-together"><a className="underline" href="https://code.visualstudio.com/license" target="_blank" rel="noopener" title="View the Visual Studio Code license." aria-label="Visual Studio Code license (opens in new tab)">license</a> and <a className="underline" href="https://go.microsoft.com/fwlink/?LinkId=521839" target="_blank" rel="noopener" title="View the Microsoft privacy statement." aria-label="Microsoft privacy statement (opens in new tab)">privacy statement</a>.</span>
                </p>
            </div>
        </div>
    )
}

function DownloadButton() {
    return (
        <Link to="/download" className="absolute flex flex-row bg-white rounded-lg px-15 py-3 font-semibold text-lg items-center object-center justify-center self-center align-center transition-all duration-100 ease-in-out hover:border-4 hover:outline-3 outline-0 border-black outline-white gap-5">
            <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" height="28" width="28">
                    <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" fill="currentColor"></path>
                </svg>
                    Download for windows
        </Link>
    )
}