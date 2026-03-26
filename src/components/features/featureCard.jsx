export function FeatureCard({title, description, content, linkText, link}) {
    return (
        <div className="grid grid-cols-2 justify-items-center align-center items-center">
            <div className="justify-self-start max-w-100">
                <p className="text-4xl text-white">{title}</p>
                <div className="mt-5 text-xl flex flex-col gap-5">
                    <p className="text-gray-400">{description}</p>
                    <a className="underline text-sky-500" href={link}>{linkText}</a>
                </div>
            </div>
            <div className="justify-self-end w-230">
                {content}
            </div>
        </div>
    )
}