'use client'

import React, { useMemo, useState } from 'react'
import { categoriesTilesData } from '@/lib/categoriesTilesData'
import CategoryTile from '../CategoryTile'
import { IoIosArrowUp } from 'react-icons/io'
import Link from 'next/link'



const CategoryGrid = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const mappedCategoriesTitles = useMemo(() => {
        return categoriesTilesData.map((item) => (
            <React.Fragment key={item.title}>
                    <CategoryTile 
                        className='
                        lg:w-[15%] lg:h-[100px] lg:mt-[1.25rem] 
                        sm:w-[22%] sm:h-[100px] sm:mt-[1rem] 
                        w-[48%] h-[100px] mt-[1rem] 
                        rounded-2xl border hover:border-blue-500 ustify-center items-center'
                        categoryTileProps={item}
                    />
            </React.Fragment>
        ))
    }, []);

  return (
    <div className='flex flex-col items-center'>
        <div className={`max-w-[1120px] flex flex-col overflow-hidden transition ${isExpanded ? 'h-auto' : 'h-[360px] sm:h-[120px]'}`}>
            <div className='flex flex-wrap justify-between'>
                {mappedCategoriesTitles}       
            </div>
        </div>
        <button className='text-blue-500 mt-4 flex flex-row gap-2 items-center' onClick={() => setIsExpanded((current) => !current)}>
            { isExpanded ? "Show less categories" : "Show more categories" }
            <IoIosArrowUp className={`transition ${isExpanded ? 'rotate-180' : 'rotate-0'}`}/>
        </button>
    </div>
  )
}

export default CategoryGrid