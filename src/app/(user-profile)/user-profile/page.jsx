'use client'
import LeftSideBar from '@/components/LeftSideBar'
import { redirect } from "next/navigation";
import Image from 'next/image'
import Link from 'next/link'
import { parseCookies } from 'nookies'

const Page = () => {

  const cookies = parseCookies();
  const name = cookies?.user_name;

  const accessToken = cookies?.access_token;
  if(!accessToken){
    redirect('/login')
  }

  return (
    <div className='overflow-hidden h-full'>

  


    {/* about sec 1  */}
    <section className='w-full flex items-start justify-start mt-20 min-h-screen '>
               <LeftSideBar />
               <main className='max-w-[1800px] flex-1 bg-[#fbfbfb] px-[0px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto h-full'>
          <h3 className=' text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-black-text font-medium font-worksans'>Welcome <span className='text-green font-semibold'>{name && name}</span></h3>

          <div className='w-full flex flex-col gap-5 items-center justify-center'>
          <div style={{ backgroundImage: "url('/assets/images/treeplantmain.jpg')" }} className='bg-white w-[90%] flex relative items-center flex-col justify-center px-3 h-[300px] mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl '>
                <h1 className='z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-white font-medium font-worksans'>0 trees planted</h1>

                <div className='absolute overflow-hidden rounded-xl z-0 top-0 left-0 w-full h-full bg-[#000] opacity-[0.4]'></div>
          </div>
          <div style={{ backgroundImage: "url('/assets/images/reforest.jpg')" }} className='bg-white w-[90%] flex relative items-center flex-col justify-center px-3 h-[300px] mt-4 shadow-2xl py-10 bg-cover bg-no-repeat rounded-xl '>
                <h1 className='z-10 text-center leading-normal lg:leading-[50px] xll:leading-[60px] text-[25px] lg:text-[35px] xll:text-[45px] text-white font-medium font-worksans'>You have 0 climate points</h1>

                <Link href='' className='text-white text-2xl underline my-3 z-20 font-semibold' >See All Assets</Link>

                <div className='absolute overflow-hidden rounded-xl z-0 top-0 left-0 w-full h-full bg-[#000] opacity-[0.4]'></div>
          </div>

          </div>
     

        </main>
    </section>
    </div>
  )
}

export default Page