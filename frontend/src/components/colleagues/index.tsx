import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';

export const Colleagues: React.FC = () => {
  return (
    <>
    <div className="w-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <h2 className="font-bold text-white text-7xl tracking-wide uppercase drop-shadow-[0px_15px_10px_rgba(255,255,255,0.7)]">Colleagues</h2>
      </div>
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(239, 68, 68, 1)" offset="0%"></stop>
            <stop stop-color="rgba(29, 78, 216, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "0.5" }}
          fill="url(#sw-gradient-0)"
          d="M0,80L14.1,106.7C28.2,133,56,187,85,186.7C112.9,187,141,133,169,100C197.6,67,226,53,254,73.3C282.4,93,311,147,339,180C367.1,213,395,227,424,193.3C451.8,160,480,80,508,53.3C536.5,27,565,53,593,66.7C621.2,80,649,80,678,73.3C705.9,67,734,53,762,40C790.6,27,819,13,847,66.7C875.3,120,904,240,932,266.7C960,293,988,227,1016,173.3C1044.7,120,1073,80,1101,60C1129.4,40,1158,40,1186,80C1214.1,120,1242,200,1271,240C1298.8,280,1327,280,1355,266.7C1383.5,253,1412,227,1440,180C1468.2,133,1496,67,1525,66.7C1552.9,67,1581,133,1609,173.3C1637.6,213,1666,227,1694,200C1722.4,173,1751,107,1779,113.3C1807.1,120,1835,200,1864,220C1891.8,240,1920,200,1948,160C1976.5,120,2005,80,2019,60L2032.9,40L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(29, 78, 216, 1)" offset="0%"></stop>
            <stop stop-color="rgba(239, 68, 68, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: "0.7" }}
          fill="url(#sw-gradient-1)"
          d="M0,200L14.1,193.3C28.2,187,56,173,85,146.7C112.9,120,141,80,169,66.7C197.6,53,226,67,254,93.3C282.4,120,311,160,339,153.3C367.1,147,395,93,424,106.7C451.8,120,480,200,508,206.7C536.5,213,565,147,593,160C621.2,173,649,267,678,293.3C705.9,320,734,280,762,220C790.6,160,819,80,847,40C875.3,0,904,0,932,60C960,120,988,240,1016,286.7C1044.7,333,1073,307,1101,300C1129.4,293,1158,307,1186,286.7C1214.1,267,1242,213,1271,193.3C1298.8,173,1327,187,1355,206.7C1383.5,227,1412,253,1440,233.3C1468.2,213,1496,147,1525,133.3C1552.9,120,1581,160,1609,153.3C1637.6,147,1666,93,1694,73.3C1722.4,53,1751,67,1779,100C1807.1,133,1835,187,1864,233.3C1891.8,280,1920,320,1948,286.7C1976.5,253,2005,147,2019,93.3L2032.9,40L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(239, 68, 68, 1)" offset="0%"></stop>
            <stop stop-color="rgba(29, 78, 216, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 100px)", opacity: "0.9" }}
          fill="url(#sw-gradient-2)"
          d="M0,160L14.1,153.3C28.2,147,56,133,85,113.3C112.9,93,141,67,169,73.3C197.6,80,226,120,254,166.7C282.4,213,311,267,339,253.3C367.1,240,395,160,424,106.7C451.8,53,480,27,508,73.3C536.5,120,565,240,593,253.3C621.2,267,649,173,678,166.7C705.9,160,734,240,762,260C790.6,280,819,240,847,246.7C875.3,253,904,307,932,326.7C960,347,988,333,1016,280C1044.7,227,1073,133,1101,133.3C1129.4,133,1158,227,1186,246.7C1214.1,267,1242,213,1271,160C1298.8,107,1327,53,1355,53.3C1383.5,53,1412,107,1440,140C1468.2,173,1496,187,1525,206.7C1552.9,227,1581,253,1609,260C1637.6,267,1666,253,1694,206.7C1722.4,160,1751,80,1779,86.7C1807.1,93,1835,187,1864,206.7C1891.8,227,1920,173,1948,173.3C1976.5,173,2005,227,2019,253.3L2032.9,280L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
      </svg>
      <svg
        id="wave"
        style={{transform: "rotateX(180deg)", transition: "0.3s"}}
        viewBox="0 0 1440 400"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(239, 68, 68, 1)" offset="0%"></stop>
            <stop stop-color="rgba(29, 78, 216, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 0px)", opacity: "0.1"}}
          fill="url(#sw-gradient-0)"
          d="M0,80L14.1,106.7C28.2,133,56,187,85,186.7C112.9,187,141,133,169,100C197.6,67,226,53,254,73.3C282.4,93,311,147,339,180C367.1,213,395,227,424,193.3C451.8,160,480,80,508,53.3C536.5,27,565,53,593,66.7C621.2,80,649,80,678,73.3C705.9,67,734,53,762,40C790.6,27,819,13,847,66.7C875.3,120,904,240,932,266.7C960,293,988,227,1016,173.3C1044.7,120,1073,80,1101,60C1129.4,40,1158,40,1186,80C1214.1,120,1242,200,1271,240C1298.8,280,1327,280,1355,266.7C1383.5,253,1412,227,1440,180C1468.2,133,1496,67,1525,66.7C1552.9,67,1581,133,1609,173.3C1637.6,213,1666,227,1694,200C1722.4,173,1751,107,1779,113.3C1807.1,120,1835,200,1864,220C1891.8,240,1920,200,1948,160C1976.5,120,2005,80,2019,60L2032.9,40L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(29, 78, 216, 1)" offset="0%"></stop>
            <stop stop-color="rgba(239, 68, 68, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 50px)", opacity: "0.2"}}
          fill="url(#sw-gradient-1)"
          d="M0,200L14.1,193.3C28.2,187,56,173,85,146.7C112.9,120,141,80,169,66.7C197.6,53,226,67,254,93.3C282.4,120,311,160,339,153.3C367.1,147,395,93,424,106.7C451.8,120,480,200,508,206.7C536.5,213,565,147,593,160C621.2,173,649,267,678,293.3C705.9,320,734,280,762,220C790.6,160,819,80,847,40C875.3,0,904,0,932,60C960,120,988,240,1016,286.7C1044.7,333,1073,307,1101,300C1129.4,293,1158,307,1186,286.7C1214.1,267,1242,213,1271,193.3C1298.8,173,1327,187,1355,206.7C1383.5,227,1412,253,1440,233.3C1468.2,213,1496,147,1525,133.3C1552.9,120,1581,160,1609,153.3C1637.6,147,1666,93,1694,73.3C1722.4,53,1751,67,1779,100C1807.1,133,1835,187,1864,233.3C1891.8,280,1920,320,1948,286.7C1976.5,253,2005,147,2019,93.3L2032.9,40L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stop-color="rgba(239, 68, 68, 1)" offset="0%"></stop>
            <stop stop-color="rgba(29, 78, 216, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{transform: "translate(0, 100px)", opacity: "0.4"}}
          fill="url(#sw-gradient-2)"
          d="M0,160L14.1,153.3C28.2,147,56,133,85,113.3C112.9,93,141,67,169,73.3C197.6,80,226,120,254,166.7C282.4,213,311,267,339,253.3C367.1,240,395,160,424,106.7C451.8,53,480,27,508,73.3C536.5,120,565,240,593,253.3C621.2,267,649,173,678,166.7C705.9,160,734,240,762,260C790.6,280,819,240,847,246.7C875.3,253,904,307,932,326.7C960,347,988,333,1016,280C1044.7,227,1073,133,1101,133.3C1129.4,133,1158,227,1186,246.7C1214.1,267,1242,213,1271,160C1298.8,107,1327,53,1355,53.3C1383.5,53,1412,107,1440,140C1468.2,173,1496,187,1525,206.7C1552.9,227,1581,253,1609,260C1637.6,267,1666,253,1694,206.7C1722.4,160,1751,80,1779,86.7C1807.1,93,1835,187,1864,206.7C1891.8,227,1920,173,1948,173.3C1976.5,173,2005,227,2019,253.3L2032.9,280L2032.9,400L2018.8,400C2004.7,400,1976,400,1948,400C1920,400,1892,400,1864,400C1835.3,400,1807,400,1779,400C1750.6,400,1722,400,1694,400C1665.9,400,1638,400,1609,400C1581.2,400,1553,400,1525,400C1496.5,400,1468,400,1440,400C1411.8,400,1384,400,1355,400C1327.1,400,1299,400,1271,400C1242.4,400,1214,400,1186,400C1157.6,400,1129,400,1101,400C1072.9,400,1045,400,1016,400C988.2,400,960,400,932,400C903.5,400,875,400,847,400C818.8,400,791,400,762,400C734.1,400,706,400,678,400C649.4,400,621,400,593,400C564.7,400,536,400,508,400C480,400,452,400,424,400C395.3,400,367,400,339,400C310.6,400,282,400,254,400C225.9,400,198,400,169,400C141.2,400,113,400,85,400C56.5,400,28,400,14,400L0,400Z"
        ></path>
      </svg>
      <div className="container absolute left-1/2 -translate-x-1/2 top-[60%]">
        <Swiper slidesPerView={8} style={{padding: "30px"}} modules={[Autoplay]} autoplay={{delay: 500, pauseOnMouseEnter: true}} loop>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/zara.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ck.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/channel.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/gucci.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/burberry.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ralph-lauren.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/prada.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/versace.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/zara.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ck.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/channel.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/gucci.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/burberry.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ralph-lauren.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/prada.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/versace.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper slidesPerView={8} style={{padding: "30px"}} modules={[Autoplay]} autoplay={{delay: 500, pauseOnMouseEnter: true, reverseDirection: true}} loop>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/zara.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ck.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/channel.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/gucci.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/burberry.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ralph-lauren.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/prada.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/versace.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/zara.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ck.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/channel.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/gucci.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/burberry.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/ralph-lauren.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/prada.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition-transform hover:scale-125">
            <div className="bg-zinc-800 w-[150px] rounded-3xl p-4">
              <img src="/versace.png" alt="" className="aspect-[4/3] invert-[100%]"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    
    </>
  );
};
