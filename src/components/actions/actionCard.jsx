export function ActionCard({icon, title, description}) {
    return (
        <div className="p-7 bg-[#16191d] transition duration-100 ease-in-out hover:border-white/30 rounded-xl border-1 border-white/10 flex flex-col gap-4 text-white">
            <div className="p-4 rounded-xl bg-[#26292d] aspect-square w-15">
                <img className="size-full" src={icon}></img>
            </div>
            <div className="font-medium text-lg">{title}</div>
            <div className="text-gray-400">{description}</div>
        </div>
    )
}