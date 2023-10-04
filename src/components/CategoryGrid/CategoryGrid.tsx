import React from 'react'
import { categoriesTilesData } from '@/lib/categoriesTilesData'
import CategoryTile from '../CategoryTile'



const CategoryGrid = () => {
  return (
    <div className='max-w-[1120px]'>
        <div className='flex flex-wrap justify-between'>
            {categoriesTilesData.map((item) => (
                <React.Fragment key={item.title}>
                    <CategoryTile 
                        className='
                        lg:w-[15%] lg:h-[110px] lg:mt-[1.25rem] 
                        sm:w-[22%] sm:h-[110px] sm:mt-[1rem] 
                        w-[48%] h-[110px] mt-[0.75rem] 
                        rounded-xl border-2 justify-center items-center'
                        categoryTileProps={item}
                    />
                </React.Fragment>
            ))
            
            }
        </div>
    </div>
  )
}

export default CategoryGrid