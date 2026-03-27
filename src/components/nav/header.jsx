import { Link } from 'react-router-dom'
import vscLogo from '../../assets/logo.png'
import { DownloadButton } from './downloadButton'
import { ExpandedSearchBar } from './expandedSearchBar'
import { SearchBar } from './searchBar'


export function Header({search}) {
    const [blur, _] = search
    return (
        <div className='fixed flex flex-col justify-items-center w-full'>
            <div className='transition duration-1000 has-[custom-blur]:blur-md'>
                {blur ? <custom-blur /> : <></>}
                <div className='bg-[#0d1014]'>
                    <div className='py-10 -mt-20'>

                    </div>
                    <div className="flex flex-row gap-50 py-6 border-b-1 border-gray-800 justify-center text-white/80">            
                        <div className="flex gap-30">
                            <Logo />
                            <HeaderButtons />        
                        </div>
                        <div className='flex flew-row gap-6'>
                            <SearchBar searchArr={search} />
                            <DownloadButton />
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white self-center'>
                <ExpandedSearchBar search={search}/>
            </div>
        </div>
    )
}

function HeaderButtons() {
    return (
        <div className='flex flex-row gap-6'>
            <HeaderButton title="Docs" />
            <HeaderButton title="Updates" />
            <HeaderButton title="Blog" />
            <HeaderButton title="API" />
            <HeaderButton title="Extensions" />
            <HeaderButton title="MCP" />
            <HeaderButton title="FAQ" />
            <HeaderButton title="Events" />
            <HeaderButton title="1M" />
        </div>
    )
}

function HeaderButton({title}) {
    return (
        <button>{title}</button>
    )
}

function Logo() {
    return (
        <Link to='/' className='flex flex-row gap-4 items-center justify-center'>
            <img src={vscLogo} className="base" width="30" height="30" alt="" />
            <span className='text-lg font-semibold text-nowrap'>Visual Studio Code</span>
        </Link>
    )
}