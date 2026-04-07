

export function GrayButton({text}) {
    return (
        <button className="rounded-lg flex align-center px-3 py-1.5 border-1 border-gray-500 items-center justify-center bg-[#25292e] transition duration-100 ease-in-out hover:bg-[#333940]">
            {text}
        </button>
    )
}