'use client';

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import commentImage from "../assets/comment.png";
import heart from "../assets/heart.svg";
import arrow from "../assets/arrow.svg";

export default function page() {
  return (
    <>
      <div className="w-[80%] m-auto mt-4 mb-10">
        <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={100} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)} navigation
      pagination={{ clickable: true }}
>
          <SwiperSlide>
            <Image src={image5} alt="iamge" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image6} alt="iamge" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image7} alt="iamge" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image8} alt="iamge" className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="xl:flex justify-start items-start m-auto w-fit">
        <section className="w-full max-w-[860px] px-8 xl:border-r-2 border-[#E8E8E8]">
          <div className="font-lato text-xs text-[#666666]">22 Jan 2024 | By John</div>
          <div className="font-playfair text-black text-3xl font-semibold max-w-[600px] my-3">Event Planning Essentials: From Catering To Decor</div>
          <Image src={image1} className="w-full mt-" />
          <p className="font-lato text-lg text-[#1A1A1A] my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="md:flex justify-start items-start gap-5 my-10 w-full">
            <div className="w-full md:w-[40%] aspect-[1.6]">
              <Image src={image2} className="w-full h-full" />
            </div>
            <p className="font-lato text-lg text-[#000000] md:w-[60%] mt-3 md:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
          </div>
          <h2 className="font-playfair text-xl text-[#345B4D] font-semibold">Comments</h2>
          <textarea name="" id="" cols="30" rows="5" className="font-lato w-full rounded-lg border-[#1A1A1A] border-[1px] p-4 my-3" placeholder="Add to the discussion"></textarea>
          <button className="bg-[#1A1A1A] text-white px-5 py-2 rounded-md mb-5 font-lato">Submit</button>
          <div className="my-3 py-5 border-t-[1px] border-[#EAE0D5] font-lato">
            <div className="flex gap-2 items-center">
              <Image src={commentImage} className="w-[40px] h-[40px] mr-3" />
              <h4 className="text-sm font-semibold border-r-[1px] border-[#1A1A1A] pr-2">Ashlin</h4>
              <h4 className="text-sm font-semibold">Jan 01, 2024</h4>
            </div>
            <div className="text-sm text-[#1A1A1A] my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EB222A] border-[1px] border-[#EB222A] px-5 py-2 flex justify-center items-center gap-1 rounded-md">
                <Image src={heart} className="w-[20px]" />
                <p className="text-white text-sm font-medium">3</p>
              </div>
              <div className="bg-[#FFFAF5] border-[1px] border-[#EAE0D5] px-5 py-2 flex justify-center items-center gap-1 rounded-md">
                <Image src={arrow} className="w-[20px]" />
                <p className="text-[#4B4B4B] text-sm font-medium">Reply</p>
              </div>
            </div>
          </div>
          <div className="my-3 py-5 border-t-[1px] border-[#EAE0D5] font-lato">
            <div className="flex gap-2 items-center">
              <Image src={commentImage} className="w-[40px] h-[40px] mr-3" />
              <h4 className="text-sm font-semibold border-r-[1px] border-[#1A1A1A] pr-2">Ashlin</h4>
              <h4 className="text-sm font-semibold">Jan 01, 2024</h4>
            </div>
            <div className="text-sm text-[#1A1A1A] my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            <div className="flex gap-3 items-center">
              <div className="bg-[#EB222A] border-[1px] border-[#EB222A] px-5 py-2 flex justify-center items-center gap-1 rounded-md">
                <Image src={heart} className="w-[20px]" />
                <p className="text-white text-sm font-medium">3</p>
              </div>
              <div className="bg-[#FFFAF5] border-[1px] border-[#EAE0D5] px-5 py-2 flex justify-center items-center gap-1 rounded-md">
                <Image src={arrow} className="w-[20px]" />
                <p className="text-[#4B4B4B] text-sm font-medium">Reply</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full max-w-[500px] px-8">
          <div className="font-playfair text-black text-2xl font-semibold">Recent Posts</div>
          <div className="flex justify-start items-stretch gap-2 my-4 font-lato">
            <Image src={image3} className="w-[140px]" />
            <div className="w-full flex-shrink flex flex-col justify-between">
              <div>
                <div className="text-sm leading-[17px] font-semibold">
                  Culinary Creativity: <br /> Signature Dishes For Your Event Menu
                </div>
                <div className="text-xs leading-[14px] text-[#1A1A1A] mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure quib</div>
              </div>
              <div className="text-[10px] text-[#B8B8B8] font-semibold">2 hours ago</div>
            </div>
          </div>
          <div className="flex justify-start items-stretch gap-2 my-4 font-lato">
            <Image src={image4} className="w-[140px]" />
            <div className="w-full flex-shrink flex flex-col justify-between">
              <div>
                <div className="text-sm leading-[17px] font-semibold">
                  Culinary Creativity: <br /> Signature Dishes For Your Event Menu
                </div>
                <div className="text-xs leading-[14px] text-[#1A1A1A] mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure quib</div>
              </div>
              <div className="text-[10px] text-[#B8B8B8] font-semibold">2 hours ago</div>
            </div>
          </div>
          <div className="flex justify-start items-stretch gap-2 my-4 font-lato">
            <Image src={image3} className="w-[140px]" />
            <div className="w-full flex-shrink flex flex-col justify-between">
              <div>
                <div className="text-sm leading-[17px] font-semibold">
                  Culinary Creativity: <br /> Signature Dishes For Your Event Menu
                </div>
                <div className="text-xs leading-[14px] text-[#1A1A1A] mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure quib</div>
              </div>
              <div className="text-[10px] text-[#B8B8B8] font-semibold">2 hours ago</div>
            </div>
          </div>
          <div className="flex justify-start items-stretch gap-2 my-4 font-lato">
            <Image src={image4} className="w-[140px]" />
            <div className="w-full flex-shrink flex flex-col justify-between">
              <div>
                <div className="text-sm leading-[17px] font-semibold">
                  Culinary Creativity: <br /> Signature Dishes For Your Event Menu
                </div>
                <div className="text-xs leading-[14px] text-[#1A1A1A] mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro autem totam iure quib</div>
              </div>
              <div className="text-[10px] text-[#B8B8B8] font-semibold">2 hours ago</div>
            </div>
          </div>
          <div className="xl:block hidden mt-10 border-t-[1px] border-[#E8E8E8] pt-10">
            <div className="w-full aspect-square bg-[#D9D9D9] rounded-lg flex justify-center items-center">
              <p>Advertisement</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
