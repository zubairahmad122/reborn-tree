import BigCard from '@/components/BigCard';
import ContactCom from '@/components/ContactCom';
import CardCoursel from '@/components/Coursel';
import FlipCard from '@/components/FlipCard';
import GoalTimeLine from '@/components/GoalTimeLine';
import Navbar from '@/components/Navbar';
import TextCard from '@/components/TextCard';
import dynamic from 'next/dynamic'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { FaRegCheckCircle } from 'react-icons/fa';


const Hero = dynamic(() => import('@/components/Hero.jsx'), { ssr: false });



const flatcardData = [
  {
    image: '/assets/flipcardimg1.png',
    title: 'Restoring Nature',
    intro: 'We plant your tree where it\'s most needed',
    text: 'We are dedicated to strategic reforestation efforts that combat climate change, restore ecosystems, and empower communities',
  },
  {
    image: '/assets/flipcardimg2.png',
    title: 'Protecting Earth',
    intro: 'A Simple Act That Can Change the World',
    text: 'Protecting Earth\'s beauty and vital ecosystems. Our commitment to sustainability, innovation, and global impact for a brighter, greener future.',
  },
  {
    image: '/assets/flipcardimg3.png',
    title: '100% Transparency',
    intro: 'Each tree is accompanied by a photo, a label, and a unique serial number',
    text: 'Connecting you with the forest, one tree at a time. Explore our process, each tree with a photo, label, and serial number.',
  },
  {
    image: '/assets/flipcardimg4.png',
    title: 'Animal Welfare',
    intro: 'Plant trees with us to aid both wild and domestic animals',
    text: 'Join our mission for nature, and know that a portion of each tree\'s cost goes towards aiding animals without food, shelter, or those facing health challenges.',
  },
]
const textcardData = [
  {
    image: '/assets/images/hsec3img1.png',
    title: 'Helping Communities',
    text: 'We empower locals and create a positive impact on communities. Read the inspiring stories of our tree planting initiatives.',
    btnText: 'Explore Our Work',
    btnLink: "/"
  },
  {
    image: '/assets/images/hsec3img2.png',
    title: 'Carbon Offset',
    text: 'Learn why companies should offset their carbon footprint and how RebornGreen can assist you in achieving sustainability goals.',
    btnText: 'Learn More',
    btnLink: "/"
  },
  {
    image: '/assets/images/hsec3img3.png',
    title: 'Our Mission',
    text: 'We are dedicated to planting trees in areas that need them most, forging partnerships with businesses for a greener, eco-friendly future.',
    btnText: 'About Us',
    btnLink: "/About US"
  },
]
const bigCardData = [
  {
    image: '/assets/images/hsec7img1.png',
    title: 'Coffee Shop Loyalty Program',
    text: 'With over 3 billion cups of coffee consumed daily worldwide, we can plant thousands of trees every day through our program.',
    btnLink: "/",
    span:"200K Trees planted"
  },
  {
    image: '/assets/images/hsec7img2.png',
    title: 'Reforstation',
    text: ' Revitalizing the land through our reforestation project, planting trees to nourish soil, communities, and the planet.',
    btnLink: "/",
    span:"Restoring 1,00,000 square meters of land."
  },
  {
    image: '/assets/images/hsec7img3.png',
    title: 'Animal Rescue',
    text: 'Redirecting funds towards animal welfare, our organization aims to save lives, provide shelter, and find loving homes for animals in need, ensuring their well-being and contributing to their overall welfare.',
    btnLink: "/About US",
    span:"Finding loving homes for over 1000 animals in need."
  },
]

const sec4pData = [
  { id: 1, text: 'Reforestation & Tree Planting' },
  { id: 2, text: 'Animal Welfare Support' },
  { id: 3, text: 'Biodiversity Conservation' },
  { id: 4, text: 'Protecting Wildlife Habitats' }
];

const GoalTimeLineData = [

  {
    id: 1,
    title: "Plant Trees, Save Lives",
    description: "Every tree you plant helps restore habitats and protect the lives of countless animals.",
    rgt: true
  },
  {
    id: 2,
    title: "Transforming Businesses, Preserving Nature",
    description: "Give back to nature and make a positive impact on the planet.",
    rgt: false
  },
  {
    id: 3,
    title: "Combat Climate Change",
    description: "Create a sustainable future for our planet and future generations.",
    rgt: true
  },
  {
    id: 4,
    title: "Promote Sustainability and Join the Green Movement",
    description: "Inspire and educate the audience to make a positive impact on the planet.",
    rgt: false
  }
];



export default function Home() {


  <Head>
     <Script
      type="text/javascript"
      src="https://app.getterms.io/cookie-consent/embed/a7d1d92c-95c2-4a78-a59a-3eca424ee3a5"
    async />
  </Head>


  return (
    <div className='overflow-hidden h-full'>
      {/* Hero Section */}
   
      <section className='w-full h-[60vh] lg:h-[calc(100vh-75px)] mx-auto'>
        <Hero videoSrc="/assets/videos/hvideo.mp4" />
      </section>



      {/* Plat Card Section */}
      <section className='w-full mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
        <h1 className=' text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'><span className='font-bold text-[#14a800]'>Green Horizons:</span> People & Nature </h1>
        <div className='flex gap-6 flex-wrap items-center justify-center'>
          {flatcardData?.map((item, index) => (<FlipCard key={index} img={item.image} title={item.title} intro={item.intro} text={item.text} />))}
        </div>

      </section>




      {/* Sustainability Section */}
      <section className='w-full max-w-[1800px] mb-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
        <div className='flex gap-4 flex-col lg:flex-row items-center justify-center'>
          <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start justify-center flex-col'>
            <h3 className='  leading-normal lg:leading-[60px] mb-4  text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[55px] text-black-text font-medium font-worksans'>Sustainability for <span className='text-green font-semibold'>Businesses</span></h3>
            <p className='leading-normal font-poppins text-[14px] xll:text-[16px] tracking-normal text-black-text'>We help Comp. to implement CSR solutions and reach net 0 goal. e.g. Providing tailored solutions to help businesses like yours achieve their sustainability goals effectively and efficiently, including ambitious net-zero targets.</p>
            <Link className='btn mt-10' href={'/'}>Read more</Link>
          </div>
          <div className=' w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1 relative flex items-center justify-center flex-col'>
            <Image src="/assets/images/bussnessec2.jpeg" width={500} height={500} alt='bussnessec2' loading='lazy' className='w-full h-full rounded-lg' />
          </div>
        </div>

      </section>


      {/* Section 4 */}
      <section className='w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>
          <span className='font-bold text-[#14a800]'>Empowering Communities & Carbon:</span> Green Mission
        </h1>
        <div className='flex gap-6 flex-wrap items-center justify-center'>
          {textcardData?.map((item, index) => (<TextCard key={index} img={item.image} title={item.title} text={item.text} btnText={item.btnText} btnLink={item.btnLink} />))}
        </div>

      </section>



      {/*  Section 5 */}
      <section className='w-full max-w-[1800px] mb-[160px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto'>
        <div className='flex gap-20 flex-col lg:flex-row items-center justify-center'>

          <div className=' w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center lg:items-end justify-center flex-col'>
            <div className='relative xsm:w-[350px] h-auto'>
              <Image src="/assets/images/sec4img1.jpg" width={350} height={350} alt='bussnessec2' loading='lazy' className=' rounded-lg w-full sm:w-5/6 md:w-[350px] h-auto md:h-[500px]' />
              <Image src="/assets/images/sec4img2.png" width={250} height={200} alt='bussnessec2' loading='lazy' className='absolute top-3 left-[-200px] hidden md:inline-block z-10 rounded-full' />
              <Image src="/assets/images/sec4img3.jpg" width={350} height={250} alt='bussnessec2' loading='lazy' className='absolute bottom-[-10px] h-[220px] left-[-200px]  hidden md:inline-block z-0 rounded-lg' />
            </div>

          </div>

          <div className='w-full xsm:w-10/12 lg:flex-1 flex items-center text-center lg:text-start lg:items-start  justify-center flex-col'>
            <h3 className='  leading-normal lg:leading-[70px] xll:leading-[80px] text-[30px] sm:text-[50px] lg:text-[60px] xll:text-[65px] text-black-text font-medium font-worksans'><span className='text-green font-semibold'>Creating Life</span>  Inside and Outside the Forest</h3>
            <p className='leading-[24px] text-[16px]  font-poppins tracking-wide text-black-text'>At RebornGreen, we believe in giving back to nature. As part of our commitment, a portion of the proceeds from each tree planted goes towards animal welfare initiatives. By choosing us, you&apos;re not only contributing to the growth of forests, but also helping to protect and care for the animals that depend on them.</p>
            <Link className='btn mt-10' href={'/'}>Read more</Link>
            <div className='w-full flex flex-col mt-14 sm:flex-row items-center justify-between'>
              <div className='flex gap-2 flex-col'>
                {sec4pData.map(item => (
                  <div key={item.id} className='flex items-center gap-x-2 text-[12px] ssm:text-[14px] xlg:text-[16px] text-green font-semibold'>
                    <span><FaRegCheckCircle size={20} /></span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
              <Image src='/assets/images/sec4img4.png' width={200} height={200} alt='image' className='w-[200px] lg:w-[150px] xlg:w-[200px] h-auto' />
            </div>
          </div>

        </div>

      </section>



      {/* Goal Time Line Section 6 */}
      <section className='w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>
          <span className='font-bold text-[#14a800]'>Our Green Goals</span></h1>

        <div className="timeLine  relative w-full mx-auto bg-[#F3F4F9] py-[5rem] rounded-xl my-[100px]">



          {
            GoalTimeLineData?.map((item) => (<GoalTimeLine key={item.id} title={item.title} description={item.description} id={item.id} rgt={item.rgt} />))
          }
        </div>


      </section>




      {/* Section big card 7 */}
      <section className='w-full flex items-center justify-start flex-col bg-white mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'> Checkout our
            <span className='font-bold text-[#14a800]'> Programs</span>
          </h1>
          <p className=' mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px]'>Discover our wide range of programs aimed at creating a sustainable future. Find out how you can get involved and make a difference.</p>
        </div>
        <div className='flex gap-6 flex-wrap items-center justify-center'>
          {bigCardData?.map((item, index) => (<BigCard key={index} img={item.image} title={item.title} text={item.text} btnLink={item.btnLink} span={item.span} />))}
        
        </div>
        <Link className='btn inline-block mt-10' href={'/'}>Explore Our Programs</Link>

      </section>


   
      <CardCoursel />

      {/* Contac Us section 8 */}
      <section className='w-full bg-[#f6f6f6] mt-0 max-w-[1800px] px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto'>
      <div className='w-full flex flex-col items-center justify-center'>
           <h1 className='text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]'>  
             <span className='font-bold text-[#14a800]'>Contact Us</span>
           </h1>
           <p className=' mb-12 w-full xsm:w-[90%] leading-5 tracking-normal font-worksans mdd:w-[60%] text-center text-black-text text-sm xsm:text-[16px] '>Get in touch with us today to discuss how we can help you create a green profile and enhance your corporate social responsibility. Together, we can create a better future for our planet and our communities.</p>
         </div>

          <ContactCom />


      </section>




    </div>
  );
}
