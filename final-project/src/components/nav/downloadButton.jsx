import {Link} from "react-router-dom"

export function DownloadButton() {
    return (
        <Link to="download/" className="px-2 py-1 rounded-sm bg-[#0069b9] underline transition duration-400 ease-in-out hover:no-underline flex flex-row items-center justify-between gap-10">
            <span>Download</span>
        </Link>
    )
}