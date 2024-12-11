'use client'

import Image from 'next/image'
import bg from '../../../public/body2/background.png'
import title from '../../../public/body2/title.png'
import ghost1 from '../../../public/hero/ghost.png'
import human1 from '../../../public/body2/human1.png'
import human2 from '../../../public/body2/human2.png'
import human3 from '../../../public/body2/human3.png'
import human4 from '../../../public/body2/human4.png'
import th1 from '../../../public/body2/title-h-1.png'
import th2 from '../../../public/body2/title-h-2.png'
import th3 from '../../../public/body2/title-h-3.png'
import th4 from '../../../public/body2/title-h-4.png'
import moon from '../../../public/body2/moon.png'


export default function Body2() {
  return (
    <div className="relative lg:h-[730px]">
      <Image src={bg} alt="background" fill priority className='object-cover' />
      <div className='relative lg:flex lg:flex-row justify-center items-center xl:items-start px-5 py-10'>
        <Image className='w-full h-20 lg:h-32 xl:h-52 xl:w-[900px] xl:pb-10' src={title} alt='' width={1000} height={1000} />
        <Image className='hidden lg:flex lg:w-64 lg:h-64' src={moon} alt="tw" width={1000} height={1000} />
      </div>

      <div className='relative flex flex-col lg:flex-row gap-10 lg:my-36 xl:my-28'>

        <div className='lg:absolute -left-32 xl:-left-44 top-0 bottom-0 flex flex-col justify-center items-center'>
          <Image className='w-96 lg:w-[550px] xl:w-[850px] h-full lg:h-96 xl:h-[500px]' src={human1} alt='' width={1000} height={1000} />
          <div>
            <Image className='w-56 xl:w-96 h-10' src={th1} alt='' width={1000} height={1000} />
          </div>
        </div>

        <div className='lg:absolute left-28 xl:left-60 top-0 bottom-0 flex flex-col justify-center items-center'>
          <div>
            <Image className='w-56 h-10' src={th2} alt='' width={1000} height={1000} />
          </div>
          <Image className='w-96 h-full lg:h-56 xl:w-[430px] xl:h-96 scale-x-[-1]' src={human2} alt='' width={1000} height={1000} />
        </div>

        <div className='lg:absolute left-0 xl:-left-10 right-0 -top-64 flex justify-center'>
          <Image className='w-72 h-full lg:h-72 xl:w-96 xl:h-[500px] scale-x-[-1]' src={ghost1} alt='' width={1000} height={1000} />
        </div>

        <div className='lg:absolute right-52 xl:right-80 top-0 -bottom-60 xl:-bottom-44 flex flex-col justify-center items-center'>
          <Image className='w-72 h-full lg:w-64 lg:h-52 xl:w-80 xl:h-80' src={human3} alt='' width={1000} height={1000} />
          <div>
            <Image className='w-56 lg:w-60 h-10' src={th3} alt='' width={1000} height={1000} />
          </div>
        </div>

        <div className='lg:absolute right-0 xl:right-10 -bottom-60 flex flex-col justify-center items-center'>
          <div>
            <Image className='w-60 h-10 lg:w-52 xl:w-64' src={th4} alt='' width={1000} height={1000} />
          </div>
          <Image className='w-72 h-full lg:w-48 xl:w-60' src={human4} alt='' width={1000} height={1000} />
        </div>

      </div>
    </div>
  )
}