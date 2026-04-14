import { useState } from 'react'

import { Header } from '../components/nav/header.jsx'
import { BinaryGrid } from '../components/binaryGrid.jsx'
import { DownloadCard } from '../components/downloadCard.jsx'
import { FeatureList } from '../components/features/featureList.jsx'
import { ActionGrid } from '../components/actions/actionGrid.jsx'
import { Footer } from '../components/footer/footer.jsx'
import { DatabaseContent } from '../components/databaseContent.jsx'

function DatabasePage() {
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
        <div className={`transition duration-1000 ${search ? 'blur-md' : ''}`}>
          <div className='mt-10 z-10 flex flex-col items-center'>
            <div className='max-w-350'>
              <DatabaseContent />
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

export default DatabasePage;