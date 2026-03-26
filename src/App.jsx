import { Header } from './components/nav/header.jsx'

import './App.css'
import { BinaryGrid } from './components/binaryGrid.jsx'
import { DownloadCard } from './components/downloadCard.jsx'
import { FeatureList } from './components/features/featureList.jsx'
import { ActionGrid } from './components/actions/actionGrid.jsx'
import { Footer } from './components/footer/footer.jsx'
import { useState } from 'react'

function App() {
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
      <div className='relative flex flex-col' onClick={handleOutsideClick}>
        <div className='mt-23'></div>
        <div className='transition duration-1000 has-[custom-blur]:blur-md'>
          {search ? <custom-blur/> : <></>}
          <div className='absolute overflow-clip text-wrap font-mono text-sm bg-gradient-to-b from-gray-700 from-[700px] to-[900px] to-transparent bg-clip-text text-transparent'>
            <BinaryGrid />
          </div>
          <div class="relative mt-10 z-10 flex flex-col items-center">
            <div className='font-bold text-center text-[60pt] text-base/25 text-white items-center flex flex-col'>
              <div>
                The open source
              </div>
              <div>
                AI code editor
              </div>
            </div>
            <div className='mt-10'>
              <DownloadCard />
            </div>
            <div className='max-w-350'>
              <FeatureList/>
              <div className='mt-20 p-10 text-white grid grid-col gap-3 justify-items-center items-center justify-center text-center'>
                <div className='text-3xl font-bold'>Code with rich features</div>
                <div className='max-w-150 text-lg text-gray-400'>There's a lot more to an editor. Whether it's using built-in features or rich extensions, there's something for everyone.</div>
              </div>
              <div className='mt-10'>
                <ActionGrid />
              </div>
              <div className='mt-30 mb-40'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
