import Link from 'next/link'
import React from 'react'
import { BsPersonCircle, BsGithub } from 'react-icons/bs'

const GITHUB_LINK = 'https://github.com/PawelDuplaga/finder-test-app';
const PERSONALPAGE_LINK = 'https://duplagadev.vercel.app/';


const TopBar = () => {

  return (
      <div className='flex flex-row w-[min(96%,1120px)] h-[50px] mt-4 border border-gray-300
            justify-between items-center bg-gray-50 text-gray-950 shadow-xl px-4 rounded-lg '>
        <div className='flex bg-gray-50 text-gray-950 font-semibold px-4 py-1 rounded-full'>Paweł Duplaga - Finder Take-home test</div>
        <div className='flex flex-row gap-8'>
          <Link href={PERSONALPAGE_LINK} target='_' className='flex flex-row gap-2 items-center justify-center'>
            <BsPersonCircle />
            <p className="hidden sm:flex hover:underline">Personal Page</p>
          </Link>
          <Link href={GITHUB_LINK} target='_' className='flex flex-row gap-2 items-center'>
          <BsGithub />
            <p className="hidden sm:flex hover:underline">Github</p>
          </Link>
        </div>
      </div>
  )
}

export default TopBar