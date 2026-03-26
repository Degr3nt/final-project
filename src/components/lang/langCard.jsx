export function LangCard({icon, name}) {
    return (
        <div className="flex flex-row text-white font-mono items-center">
            <img className="w-16" src={icon}></img>
            <p className="grow">{name}</p>
        </div>
    )
}