'use client'

import Image from "next/image";
import { useEffect, useState } from "react"

const MonthlyPlanting = ({ month }) => {

    const [treeInp, setTreeInp] = useState(0);
    const [disable, setDiable] = useState(true);

    const cardData = [
        {
            img: '/assets/images/aboutmain.jpg',
            title: '0 trees',
            des: 'Planted',
        },
        {
            img: '/assets/images/tonnes.jpg',
            title: '0.00 tonnes',
            des: 'CO2 absorbed by your trees across their lifetime',
        },
        {
            img: '/assets/images/farmer.jpg',
            title: '<1 workday',
            des: 'Created for local communities',
        },
        {
            img: '/assets/images/reforest.jpg',
            title: '0.00 ㎡',
            des: 'Land reforested',
        },
    ]

    useEffect(() => {
        if (treeInp < 1) {
            setDiable(true)
        } else {
            setDiable(false)
        }

    }, [treeInp])
    return (
        <div>

            <section className='mx-auto my-4 flex items-center justify-center'>
                {/* image and buttons main  */}
                <div style={{ backgroundImage: "url('/assets/images/csr.jpg')" }} className='w-full  px-10 flex flex-col min-h-[90vh] object-cover bg-no-repeat bg-cover object-center rounded-lg items-center justify-center'>
                    <div className="flex h-full p-4 shadow-lg shadow-[#2c2c2c] bg-[#00000036] flex-col items-center py-20 justify-between">
                        <h2 className='text-center text-[16px] xsm:text-[18px] sm:text-[22px] font-semibold text-white'>Great, pick how many trees you’d like to plant!</h2>
                        <div className='w-[200px] bg-white rounded-lg my-3 flex items-center justify-center flex-col h-auto px-8 text-center py-6'>
                            <input type="number" value={treeInp} onChange={(e) => setTreeInp(e.target.value)} className='bg-transparent text-[25px] font-semibold text-center outline-none w-1/2 h-full' />
                            <p className='font-semibold'>Trees {month && 'per month'}</p>
                        </div>
                        <p className='text-[12px] text-[#fff]'>Please enter a minimum of 10 trees {month && 'per month'}</p>
                    </div>
                    <div className="flex flex-wrap my-10 items-center justify-center gap-10 sm:gap-0 mdd:justify-between  w-full sm:w-[90%] mdd:w-[85%] lg:w-[75%]">
                        <div className="flex gap-y-2 flex-col items-center justify-start">
                            <p className=" text-[12px] text-white sm:text-[14px] font-light font-poppins">Just getting started?</p>
                            <button onClick={() => setTreeInp(30)} className=" px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px] bg-green py-3 rounded-full text-white font-semibold font-worksans tracking-wide">30 Trees</button>
                        </div>
                        <div className="flex gap-y-2 flex-col items-center justify-start">
                            <p className=" text-[12px] text-white sm:text-[14px] font-light font-poppins">Started making some sales?</p>
                            <button onClick={() => setTreeInp(200)} className=" px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px] bg-green py-3 rounded-full text-white font-semibold font-worksans tracking-wide">200 Trees</button>
                        </div>
                        <div className="flex gap-y-2 flex-col items-center justify-start">
                            <p className=" text-[12px] text-white sm:text-[14px] font-light font-poppins">Growing your impact?</p>
                            <button onClick={() => setTreeInp(1000)} className=" px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px] bg-green py-3 rounded-full text-white font-semibold font-worksans tracking-wide">1,000 Trees</button>
                        </div>

                    </div>
                    <div className="flex my-10 items-center justify-between w-full">
                        <p className="font-semibold text-[16px] xsm:text-[20px] sm:text-[30px] text-white">Total: £ {treeInp}.00 / {month && 'month'}</p>
                        <button disabled={treeInp === 0} className={` ${disable ? 'bg-[#14a80050]' : 'bg-green'} px-4 xsm:px-6 sm:px-10 md:px-14 text-[14px] md:text-[18px]  py-3 rounded-sm text-white font-semibold font-worksans tracking-wide`}>Continus</button>
                    </div>
                </div>

            </section>

          
        </div>
    )
}

export default MonthlyPlanting