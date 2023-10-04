import React from 'react'
import Image from 'next/image'
import { TCategoryTileProps } from '@/lib/categoriesTilesData'


type TileProps = {
    categoryTileProps : TCategoryTileProps,
    className : string
}

const CategoryTile = ({ categoryTileProps, className } : TileProps) => {

    const { icon, title, href } = categoryTileProps;

  return (
    <div className={className}>
        <div className='flex flex-col gap-2 justify-center items-center w-full h-full p-1'>
            <Image 
                src={icon}
                alt={`${title} category icon`}
                height={40}
                width={40}
            />
            <h3 className='text-center font-semibold text-blue-500'>{title}</h3>
        </div>
    </div>
  )
}

export default CategoryTile