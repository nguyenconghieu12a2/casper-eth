'use client'
import Image from 'next/image'
import bg from '../../../public/foot/background.png'
import moon from '../../../public/body2/moon.png'
import title from '../../../public/foot/title.png'
import item1 from '../../../public/foot/tab1.png'
import item2 from '../../../public/foot/tab2.png'
import item3 from '../../../public/foot/tab3.png'
import item4 from '../../../public/foot/tab4.png'
import item5 from '../../../public/foot/tab5.png'
import market from '../../../public/foot/subtitle1.png'
import m1 from '../../../public/foot/footi1.png'
import m2 from '../../../public/foot/footi2.png'
import m3 from '../../../public/foot/footi3.png'
import m4 from '../../../public/foot/footi4.png'
import social from '../../../public/foot/subtittle2.png'
import s1 from '../../../public/foot/t.png'
import s2 from '../../../public/foot/tele.png'


export default function Footer() {
  return (
    <div className="relative">
      <Image src={bg} alt="background" fill priority className='object-cover' />
      <div className='relative'>
        <div className='flex flex-col items-center mb-10'>
          <Image className='w-52 h-52' src={moon} alt="background" width={1000} height={1000} />
          <Image className='w-[600px] h-24 px-5 lg:w-[900px] lg:h-48' src={title} alt="background" width={1000} height={1000} />
        </div>
        <div className='flex flex-col justify-center items-center gap-7'>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-7'>
            <Image className='w-72 h-72 xl:w-96 xl:h-96' src={item1} alt="background" width={1000} height={1000} />
            <Image className='w-72 h-72 xl:w-96 xl:h-96' src={item2} alt="background" width={1000} height={1000} />
            <Image className='w-72 h-72 xl:w-96 xl:h-96' src={item3} alt="background" width={1000} height={1000} />
          </div>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-7'>
            <Image className='w-72 h-72 xl:w-96 xl:h-96' src={item4} alt="background" width={1000} height={1000} />
            <Image className='w-72 h-72 xl:w-96 xl:h-96' src={item5} alt="background" width={1000} height={1000} />
          </div>
        </div>

        <div className='flex flex-col items-center gap-5 mt-10'>
          <Image className='w-32 h-10' src={market} alt="background" width={1000} height={1000} />
          <div className='flex flex-row gap-5'>
            <div className='flex flex-col gap-5'>
              <Image className='w-40 h-10' src={m1} alt="background" width={1000} height={1000} />
              <Image className='w-40 h-10' src={m2} alt="background" width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-5'>
              <Image className='w-40 h-10' src={m3} alt="background" width={1000} height={1000} />
              <Image className='w-40 h-10' src={m4} alt="background" width={1000} height={1000} />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-5 mt-10 pb-10'>
          <Image className='w-32 h-10' src={social} alt="background" width={1000} height={1000} />
          <div className='flex flex-row gap-5'>
            <Image className='w-40 h-24' src={s1} alt="background" width={1000} height={1000} />
            <Image className='w-40 h-24 mt-2' src={s2} alt="background" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  )
}