import CategoryGrid from '@/components/CategoryGrid'
import React from 'react'
import { categoriesTilesData } from '@/lib/categoriesTilesData'
import InfoSection from '@/components/InfoSection'
import FillerElement from '@/components/FillerElement'

const HomeView = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <InfoSection />
        <CategoryGrid categoriesTilesData={categoriesTilesData} />
        <FillerElement />
    </div>
  )
}

export default HomeView