import CategoryGrid from '@/components/CategoryGrid'
import React from 'react'
import { categoriesTilesData } from '@/lib/categoriesTilesData'
import TopBar from '@/components/TopBar'

const HomeView = () => {

  return (
    <div className="flex flex-col items-center justify-center">
        <TopBar />
        <CategoryGrid categoriesTilesData={categoriesTilesData} />
    </div>
  )
}

export default HomeView