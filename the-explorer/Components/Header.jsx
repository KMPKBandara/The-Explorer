import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between item-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
        </div>
      </div>
    </div>
  )
}

export default Header
