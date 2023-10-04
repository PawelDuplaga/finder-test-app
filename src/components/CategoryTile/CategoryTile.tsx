import React from 'react'
import Image from 'next/image'

type CategoryTilProps = {
    title : string,
    icon : string,
    href : string,
}


const CategoryTile = ({ title, icon, href } : CategoryTilProps) => {



  return (
    <div className='flex flex-col gap-2'>
        <Image 
            src={icon}
            alt={`${title} category icon`}
            height={40}
            width={40}
        />
        <h3>title</h3>
    </div>
  )
}

export default CategoryTile