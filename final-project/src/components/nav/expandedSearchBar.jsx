

export function ExpandedSearchBar({search}) {
    const [isSearch, setSearch] = search;

    return (
        <div className={`transition-all duration-0 flex ${isSearch ? "" : "-mt-100 delay-1000"}`}>
            <div className="z-10">
                <div className={`bg-[#0d1014] p-2 rounded-lg border-2 border-[#313437] transition-all duration-1000 ${isSearch ? "opacity-100" : "opacity-0"}`}>
                    <div className="flex flex-row gap-2 items-center">
                        <div className="border-1 border-white/30 flex flew-row pr-3">
                            <input className="p-2 w-150 focus:outline-0" placeholder="Search the website" type="textarea"></input>
                            <img src="https://code.visualstudio.com/assets/icons/search-dark.svg" alt=""></img>
                        </div>
                        <div className="justify-self-end">
                            <button className="p-4" onClick={() => setSearch(false)}>
                                <svg viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg" height="10" width="10">
                                    <path d="M0 0 L88 88 M0 88 L88 0 z" stroke="gray" stroke-width="13"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}