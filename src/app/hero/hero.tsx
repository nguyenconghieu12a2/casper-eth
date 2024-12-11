'use client'

import Image from "next/image"
import bg from '../../../public/hero/background.png'
import x from '../../../public/hero/x.png'
import tele from '../../../public/hero/tele.png'
import dex from '../../../public/hero/dex.png'
import dexs from '../../../public/hero/dexs.png'
import main from '../../../public/hero/main.png'
import ghost1 from '../../../public/hero/ghost.png'
import ghost2 from '../../../public/hero/ghost2.png'
import stock from '../../../public/hero/stock.png'
import hamburger from '../../../public/hamburger.svg'
import { useState } from "react"

export default function Hero() {

  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10">
      <Image src={bg} alt="background" fill priority className='object-cover' />

      <header className="relative">
        <div className="hidden md:flex flex-row justify-center gap-3 lg:gap-7 pt-5">
          <Image className="w-10 h-10 lg:w-14 lg:h-14" src={x} alt="background" width={1000} height={1000} />
          <Image className="w-10 h-10 lg:w-14 lg:h-14" src={tele} alt="background" width={1000} height={1000} />
          <Image className="w-11 h-11 lg:w-16 lg:h-16" src={dex} alt="background" width={1000} height={1000} />
          <Image className="w-10 h-10 lg:w-14 lg:h-14" src={dexs} alt="background" width={1000} height={1000} />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='md:hidden flex justify-end px-5 pt-3'>
          <Image src={hamburger} height={20} width={20} alt="Hamburger Menu" />
        </div>
      </header>

      <div className="relative flex flex-row justify-center lg:justify-around mb-7 mt-7">
        <div className="flex flex-row justify-center items-end">
          <Image className="w-20 h-20 lg:w-28 lg:h-28 xl:w-44 xl:h-44" src={ghost1} alt="background" width={1000} height={1000} />
          <Image className="w-48 h-32 lg:w-64 lg:h-44 xl:w-96 xl:h-64" src={main} alt="background" width={1000} height={1000} />
          <Image className="w-20 h-20 lg:w-28 lg:h-28 xl:w-44 xl:h-44 scale-x-[-1]" src={ghost1} alt="background" width={1000} height={1000} />
        </div>
        <div className="hidden lg:flex items-end">
          <Image className="w-28 h-28 scale-x-[-1] xl:w-44 xl:h-44" src={ghost1} alt="background" width={1000} height={1000} />
        </div>
      </div>

      <div className="relative flex flex-row justify-center pb-10">
        <Image className="w-32 h-20 lg:w-44 lg:h-28 xl:w-52 xl:h-40" src={ghost2} alt="background" width={1000} height={1000} />
        <Image className="w-32 h-20 lg:w-44 lg:h-28 xl:w-52 xl:h-40" src={stock} alt="background" width={1000} height={1000} />
      </div>

      {open && (
        <div className="fixed top-0 left-0 bottom-0 right-0 h-[830px] w-full bg-white shadow-md z-20">
          <div onClick={() => setOpen(!open)}
            className='text-black text-2xl flex justify-end pr-10 pt-5'>
            <p>X</p>
          </div>
          <ul className="flex flex-col space-y-10 py-10 px-5">
            <li className='font-bold '>
              <a href={`#`} className="text-gray-700 hover:text-black">
                Trang chủ
              </a>
            </li>
            <li className='font-bold '>
              <a href={`#`} className="text-gray-700 hover:text-black">
                Giới thiệu
              </a>
            </li>
            <li className='font-bold '>
              <a href={`#`} className="text-gray-700 hover:text-black">
                Sản phẩm
              </a>
            </li>
            <li className='font-bold '>
              <a href={`#`} className="text-gray-700 hover:text-black">
                Tin tức
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}