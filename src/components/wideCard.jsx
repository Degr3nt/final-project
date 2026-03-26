

export function WideCard({title, description, img}) {

    return (
        <div className="rounded-3xl bg-[#16191d] text-white grid max-w-120 gap-4 p-5 border-1 border-white/20">
            <p className="text-xl">{title}</p>
            <p className="text-gray-400 text-lg">{description}</p>
            <div className="self-end mt-5 justify-items-center">
                <img className="self-end" src={img}></img>
            </div>
        </div>
    )

}