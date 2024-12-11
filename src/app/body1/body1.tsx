'use client'

import Image from 'next/image'
import bg from '../../../public/body1/background.png'
import tw from '../../../public/body1/tweet.png'

export default function Body1() {
  return (
    <div className="relative -translate-y-8">
      <Image src={bg} alt="background" fill priority className='object-cover' />
      <div className='relative lg:grid lg:grid-cols-2 py-10'>
        <div className='flex justify-center pt-12'>
          <Image className='w-64 lg:w-[500px] h-full' src={tw} alt="tw" width={1000} height={1000} />
        </div>
        <div className='flex justify-center items-center text-center text-white lg:text-4xl xl:pr-10'>
          Casper the Friendly Ghost - The OG Vitalik meme coin. Casper was first mentioned by Vitalik on October 31, 2016, in celebration of Halloween. Now, Casper is officially back, ready to reclaim its position and make Halloween 2024 unforgettable!
        </div>
      </div>
    </div>
  )
}