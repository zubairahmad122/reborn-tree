'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {

  const heroImages = [
    {
      id: 1,
      mainImage:'/assets/h1.png'
    },
    {
      id: 2,
      mainImage:'/assets/h2.png'
    },
    {
      id: 3,
      mainImage:'/assets/h3.jpeg'
    }
  ];

  return (
    <div className='relative w-full h-full'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        preventMovementUntilSwipeScrollTolerance={true}
        interval={4000} // Time between slides in milliseconds
        className='mx-auto h-full w-full'
      >
        {heroImages.map(item => (
          <div key={item.id} className='relative w-[95%] overflow-hidden rounded xsm:rounded-[40px] h-full mx-auto'>
            <Image src={item.mainImage} priority width={1000} height={1000} alt='Hero Images' className='w-full object-cover rounded-xl overflow-hidden object-center' />
            {/* Apply an overlay to improve text readability */}
            <div className='absolute rounded-xl top-0 left-0 bg-black bg-opacity-50 z-10 w-full h-full'></div>
          </div>
        ))}
      </Carousel>
      {/* --- content  */}
      <div className=' w-[90%] h-full ssm:w-[80%] flex-col mx-auto hero-content flex items-center gap-y-3 justify-center z-10'>
        <h1 className='text-[#ffffff] text-center font-semibold text-sm ssm:text-lg  xsm:text-[25px] sm:text-[35px] mdd:text-[50px] xlg:text-[60px] xll:text-[70px]'>RebornGreen <span className='text-[#14a800]'>Planting Trees</span> for a Greener Future</h1>


       <div className='flex flex-col xsm:flex-row items-center gap-3'>
       <Link className='bg-[#8acf25] text-[#4c563c] text-[14px] sm:text-[16px] px-6 sm:px-8  font-semibold rounded-[30px] py-2 sm:py-3 hover:bg-[#14a800] duration-300 ease-linear hover:text-white' href='/for-Business'>Bussness</Link>
        <Link className='bg-white text-[#45a856] text-[14px] sm:text-[16px] px-6 sm:px-8 font-semibold rounded-[30px] py-2 sm:py-3 hover:bg-[#8acf25] duration-300 ease-linear hover:text-[#4c563c]' href='/about'>About US</Link>
       </div>
      </div>
    </div>
  );
}

export default Hero;
