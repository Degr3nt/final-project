

export function SearchBar({searchArr}) {
    const [search, setSearch] = searchArr;

    function handleClick() {
        setSearch(true)
    }

    return (
        <button className="select-none px-2 py-1 rounded-sm border-1 border-gray-800 transition duration-400 ease-in-out hover:bg-white/20 flex flex-row items-center justify-between gap-10"
            onClick={handleClick}
        >
            <div className="justify-items-start flex flex-row gap-2 items-center">
                <img src="https://code.visualstudio.com/assets/icons/search-dark.svg" alt=""></img>
                <span>Search</span>
            </div>
            <div className="bg-[#14171b] p-1 rounded-sm border-1 text-gray-400 border-gray-800 justify-center items-center text-xs">
                <span>Ctrl+k</span>
            </div>
        </button>
    )
}