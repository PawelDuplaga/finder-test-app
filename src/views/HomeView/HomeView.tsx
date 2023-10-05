import CategoryGrid from '@/components/CategoryGrid'
import React from 'react'
import { categoriesTilesData } from '@/lib/const/categoriesTilesData'
import FillerElement from '@/components/FillerElement'

const HomeView = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full">
        <FillerElement />
        <CategoryGrid categoriesTilesData={categoriesTilesData} />
        <FillerElement />
    </div>
  )
}

export default HomeView