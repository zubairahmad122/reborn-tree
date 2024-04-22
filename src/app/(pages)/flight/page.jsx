"use client";
import FlightTimeLine from "@/components/FlightGoals";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import { CiCalculator1, CiFlag1, CiMobile1 } from "react-icons/ci";
import { FaHandHolding } from "react-icons/fa";

const GoalTimeLineData = [
  {
    id: 1,
    img: "/assets/timel1.svg",
    text: "Attach the Tag to Your Luggage",
    rgt: false,
    icon: <CiFlag1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 2,
    img: "/assets/timel2.svg",
    text: "Simply Touch it to the Back of Your Phone or Scan the QR Code Located on the Back",
    rgt: true,
    icon: <CiMobile1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 3,
    img: "/assets/timel1.svg",
    text: "You Will Be Directed to Our Flight Carbon Emissions Calculator",
    rgt: false,
    icon: <CiCalculator1 width={25} className={"text-green text-2xl"} />,
  },
  {
    id: 4,
    img: "/assets/timel2.svg",
    text: "Select a Verified Carbon Credits Project and Offset Your Emissions",
    rgt: true,
    icon: <FaHandHolding width={25} className={"text-green text-2xl"} />,
  },
];

const page = () => {
  return (
    <div className="overflow-hidden h-full">
      <div
        style={{ backgroundImage: "url('/assets/images/airplaneimg.jpg')" }}
        className=" flex-col h-[80vh] flex items-center justify-center bg-cover w-full  bg-center px-[30px] relative lg:px-[60px] xll:px-[120px] py-[6rem] mx-auto"
      >
        <motion.h3
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className=" z-[1] leading-normal text-center text-[30px]  xll:text-[40px] text-white font-medium font-poppins"
        >
          Project Create by Us, Supported by You, For Our Planet
        </motion.h3>

        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-20 z-0"></div>
      </div>

      {/* section 1  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/assets/images/mob-sec1.png"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[500px]  object-cover h-auto sm:h-[400px] lg:h-[550px]"
              />
            </div>
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-center t  justify-center flex-col">
                <Image
                  src="/assets/images/co2reduc.png"
                  width={100}
                  height={100}
                  alt="Co2 reduction"
                  loading="lazy"
                  className=" rounded-lg w-[160px]  object-cover h-auto "
                />

                <h3 className=" text-center  mb-[20px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Flight Carbon Offset Luggage Tag
                </h3>
                <p className="leading-[30px] text-sm sm:text-[15px]  font-sans  text-black-text">
                  Our first and unique project was created to reduce flight
                  emissions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal Time Line Section 2 */}
      <section className="w-full bg-[#f6f6f6] mt-10 max-w-[1800px] mb-[60px]  px-[30px] lg:px-[60px] xll:px-[120px] py-[4rem] mx-auto">
        <motion.h1
          initial={{ y: 200 }}
          viewport={{ once: true }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-[20px] font-poppins text-[30px] xsm:text-[40px] lg:text-[55px] xll:text-[60px] font-[500] text-[#3d3d3d]"
        >
          <span className="font-bold text-[#14a800]">How it works</span>
        </motion.h1>

        <div className="timeLine  relative w-full mx-auto bg-[#F3F4F9] py-[5rem] rounded-xl my-[100px]">
          {GoalTimeLineData?.map((item) => (
            <FlightTimeLine
              key={item.id}
              img={item.img}
              text={item.text}
              id={item.id}
              rgt={item.rgt}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      {/* section 3  */}
      <section className="bg-[#ffffff]">
        <div className="w-full max-w-[1800px] my-[40px]   px-[30px] lg:px-[60px] xll:px-[120px] py-[2rem] mx-auto">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={`flex gap-15 flex-col lg:flex-row my-20 items-center justify-center`}
          >
            <div className="flex-1 flex items-center relative justify-center">
              <Image
                src="/assets/boombo.jpg"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-full lg:w-[600px]  object-cover h-auto"
              />
              <Image
                src="/assets/latex.JPG"
                width={600}
                height={600}
                alt="bussnessec2"
                loading="lazy"
                className=" rounded-lg w-[140px] xsm:w-[200px] lg:w-[300px] xll::w-[400px] absolute top-0 left-0 lg:left-[-60px]  object-cover h-auto"
              />
            </div>
            <div className="  w-full mt-8 lg:mt-0 xsm:w-10/12 lg:flex-1  flex items-center justify-center flex-col">
              <div className="w-full xsm:w-10/12 lg:flex-1 flex items-start  justify-start flex-col">
                <div>
                  <Image
                    src="/assets/logos/ecofrendly.png"
                    width={200}
                    height={200}
                    alt="bussnessec2"
                    loading="lazy"
                    className=" w-[50px]  object-cover h-auto"
                  />
                  <h3 className=" text-left  mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                    Bamboo
                  </h3>
                  <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                    Bamboo is a rapidly renewable resource that requires minimal
                    water and thrives without pesticides.
                  </p>
                </div>
                <div className="mt-5">
                  <Image
                    src="/assets/logos/hnd.png"
                    width={200}
                    height={200}
                    alt="bussnessec2"
                    loading="lazy"
                    className=" w-[50px]  object-cover h-auto"
                  />
                  <h3 className=" text-left  mb-[0px] font-sans text-[25px] xsm:text-[30px] xll:text-[30px] font-[500] text-green">
                  Latex
                  </h3>
                  <p className="leading-[30px] text-sm sm:text-[16px] font-normal  font-sans  text-black-text">
                  Latex is a natural, renewable material derived from the rubber tree.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
