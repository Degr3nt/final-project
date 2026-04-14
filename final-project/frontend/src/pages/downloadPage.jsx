import { useState } from "react"

import { Header } from "../components/nav/header"
import { Footer } from "../components/footer/footer"
import { DownloadForm } from "../components/downloadForm"

function DownloadPage() {
    const [search, setSearch] = useState(false)
    
    function handleOutsideClick() {
        if (!search)
            return
        setSearch(false)
    }

    return (
         <div className='bg-[#0d1014]'>
            <div className='relative z-20'>
                <Header search={[search, setSearch]} />
            </div>
            <div className='relative flex flex-col items-center' onClick={handleOutsideClick}>
                <div className='mt-23'></div>
                <div className={`max-w-350 transition duration-1000 ${search ? 'blur-md' : ''}`}>
                    <div className="flex flex-col items-center gap-20">
                        <div className="flex flex-col gap-10 justify-center items-center">
                            <p className="mt-10 text-white text-5xl text-center font-bold w-200">You're one step away from downloading Visual Studio Code</p>
                            <p className="text-gray-400 text-2xl text-center font-semibold">Fill the form below to download</p>
                        </div>
                        <DownloadForm />
                    </div>
                    <div className='mt-30'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadPage;