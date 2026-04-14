
export function BackgroundAndImage({path}) {
    return (
        <div className="relative flex justify-center items-center self-center align-center">
            <img className="rounded-lg" src="https://code.visualstudio.com/assets/home/hero-background.webp"></img>
            <div className="absolute z-10 flex flex-grow w-full h-full justify-center items-center self-center align-center place-center">
                <img className='p-10 rounded-lg flex flex-grow w-full h-full object-contain' src={path}></img>
            </div>
        </div>
    )
}