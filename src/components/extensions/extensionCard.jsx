

export function ExtensionCard({icon, name, description}) {
    return (
        <div className="rounded-xl p-6 border-1 border-white/10 transition duration-100 ease-in-out hover:border-white/30 bg-[#16181c] text-white grid grid-cols-2">
            <img className="justify-self-start w-13 rounded-lg" src={icon}></img>
            <div className="justify-self-end flex flex-col gap-2 w-45">
                <p className="text-xl font-semibold">{name}</p>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    )
}