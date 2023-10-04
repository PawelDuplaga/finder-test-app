import React from 'react'
import Image from 'next/image'
import { TCategoryTileProps } from '@/lib/categoriesTilesData'
import Link from 'next/link'

type TileProps = {
    categoryTileProps : TCategoryTileProps,
    className : string
}

const CategoryTile = ({ categoryTileProps, className } : TileProps) => {

    const { icon, title, href } = categoryTileProps;

  return (
    <Link className={className} href={href}>
        <div className='flex flex-col gap-1 justify-center items-center w-full h-full p-1'>
            <Image 
                src={icon}
                alt={`${title} category icon`}
                height={36}
                width={36}
            />
            <h3 className='text-center font-medium sm:text-[1rem] text-[0.85rem] 
                         text-blue-500 leading-tight'
            >{title}</h3>
        </div>
    </Link>
  )
}

export default CategoryTile