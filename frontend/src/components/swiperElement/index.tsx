import styles from "./swiperElement.module.scss";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";

interface SwiperElementProps {
  title: string;
  description: string;
  price: number;
  stars: number;
  colors: string[];
  img: string
}

export const SwiperElement: React.FC<SwiperElementProps> = ({title, description, price, stars, colors, img}) => {
  return (
    <div className={`w-full h-[500px] flex justify-center items-center relative ${styles.gradientBg}`}>
      <div className="w-full absolute -z-0">
        <svg
          id="visual"
          viewBox="0 0 960 500"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <defs>
            <linearGradient id="grad1_0" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_1" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#cd5b69"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_2" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#5c3c64"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#cd5b69"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad1_3" x1="43.8%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#5c3c64"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#0d1721"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_0" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_1" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#cd5b69"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#fbae3c"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_2" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#cd5b69"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#5c3c64"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="grad2_3" x1="0%" y1="100%" x2="56.3%" y2="0%">
              <stop
                offset="14.444444444444446%"
                stop-color="#0d1721"
                stop-opacity="1"
              ></stop>
              <stop
                offset="85.55555555555554%"
                stop-color="#5c3c64"
                stop-opacity="1"
              ></stop>
            </linearGradient>
          </defs>
          <g transform="translate(960, 420)">
            <path
              d="M-405 0C-413 -41.2 -421.1 -82.4 -391.2 -104.8C-361.3 -127.2 -293.5 -130.9 -271.9 -157C-250.3 -183.1 -274.9 -231.7 -269.4 -269.4C-263.9 -307.1 -228.5 -334 -190.5 -330C-152.5 -326 -112.1 -291.1 -80 -298.5C-47.8 -305.8 -23.9 -355.4 0 -405L0 0Z"
              fill="#2a2c47"
            ></path>
            <path
              d="M-303.7 0C-309.8 -30.9 -315.8 -61.8 -293.4 -78.6C-271 -95.4 -220.2 -98.2 -203.9 -117.8C-187.7 -137.3 -206.2 -173.8 -202.1 -202.1C-198 -230.3 -171.3 -250.5 -142.9 -247.5C-114.4 -244.5 -84.1 -218.3 -60 -223.9C-35.9 -229.4 -17.9 -266.6 0 -303.7L0 0Z"
              fill="#984970"
            ></path>
            <path
              d="M-202.5 0C-206.5 -20.6 -210.5 -41.2 -195.6 -52.4C-180.7 -63.6 -146.8 -65.4 -136 -78.5C-125.2 -91.6 -137.4 -115.8 -134.7 -134.7C-132 -153.6 -114.2 -167 -95.3 -165C-76.3 -163 -56.1 -145.6 -40 -149.2C-23.9 -152.9 -12 -177.7 0 -202.5L0 0Z"
              fill="#f17e55"
            ></path>
            <path
              d="M-101.2 0C-103.3 -10.3 -105.3 -20.6 -97.8 -26.2C-90.3 -31.8 -73.4 -32.7 -68 -39.3C-62.6 -45.8 -68.7 -57.9 -67.4 -67.4C-66 -76.8 -57.1 -83.5 -47.6 -82.5C-38.1 -81.5 -28 -72.8 -20 -74.6C-12 -76.5 -6 -88.9 0 -101.2L0 0Z"
              fill="#fbae3c"
            ></path>
          </g>
          <g transform="translate(0, 80)">
            <path
              d="M405 0C411.1 41.2 417.2 82.3 384.4 103C351.6 123.7 279.9 123.8 261.5 151C243.2 178.2 278.1 232.4 278.6 278.6C279.1 324.8 245 363 202.5 350.7C160 338.4 109.2 275.6 74 276.3C38.9 276.9 19.4 340.9 0 405L0 0Z"
              fill="#2a2c47"
            ></path>
            <path
              d="M303.8 0C308.3 30.9 312.9 61.8 288.3 77.3C263.7 92.8 209.9 92.9 196.2 113.2C182.4 133.6 208.6 174.3 209 209C209.3 243.6 183.7 272.3 151.9 263.1C120 253.8 81.9 206.7 55.5 207.2C29.2 207.7 14.6 255.7 0 303.8L0 0Z"
              fill="#984970"
            ></path>
            <path
              d="M202.5 0C205.6 20.6 208.6 41.2 192.2 51.5C175.8 61.8 140 61.9 130.8 75.5C121.6 89.1 139.1 116.2 139.3 139.3C139.5 162.4 122.5 181.5 101.3 175.4C80 169.2 54.6 137.8 37 138.1C19.4 138.4 9.7 170.5 0 202.5L0 0Z"
              fill="#f17e55"
            ></path>
            <path
              d="M101.3 0C102.8 10.3 104.3 20.6 96.1 25.8C87.9 30.9 70 31 65.4 37.7C60.8 44.5 69.5 58.1 69.7 69.7C69.8 81.2 61.2 90.8 50.6 87.7C40 84.6 27.3 68.9 18.5 69.1C9.7 69.2 4.9 85.2 0 101.3L0 0Z"
              fill="#fbae3c"
            ></path>
          </g>
        </svg>
      </div>
      <div className={`cursor-pointer absolute right-5 top-5 bg-zinc-800 flex justify-center items-center gap-2 w-1/12 py-1 rounded-xl transition-transform hover:scale-110 ${styles.fadeIn}`}>
        <FaFire className="text-orange-400 text-2xl"/>
        <p className="text-xl font-semibold text-white">New</p>
      </div>
      <div className={`absolute right-[18%] bottom-[10%] bg-zinc-800 flex justify-center items-center gap-2 px-2 py-1.5 rounded-2xl transition-transform hover:scale-110 ${styles.fadeIn}`}>
        {colors.map((color, index) => (
          <Link to={''} key={index} className='w-6 h-6 cursor-pointer rounded-full' style={{backgroundColor: color}}></Link>
        ))}
      </div>
      <div className={`flex items-center flex-col z-10 w-[37%] ${styles.fadeInReversed}`}>
        <h2 before={`${title}`} className={`text-white text-3xl font-bold tracking-wide italic relative before:content-[attr(before)] before:absolute before:left-0 before:top-0 before:-z-[1] before:text-violet-500 before:opacity-30 before:scale-110 before:tracking-wide`}>{title}</h2>
        <p className="text-white text-xl font-semibold mt-5 w-9/12 text-center">
          {description}
        </p>
      </div>
      <div className={`flex justify-center items-center w-2/5 ${styles.fadeInImg}`}>
        <img
          className="w-5/6 transition-transform rotate-45 duration-300 ease-in-out hover:scale-110 hover:rotate-[30deg] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
          src={img}
          alt="Product Image"
        />
      </div>
      <div className={`${styles.fadeIn} flex items-center gap-5 flex-col z-10 w-[23%]`}>
        <Rating name={`${title.replace(/\s/g, "")}-rating-carousel`} defaultValue={stars} readOnly/>
        <p className="text-white text-3xl font-mono font-semibold">${price}</p>
        <Link
          to={''}
          className='w-[200px] bg-zinc-800 flex justify-center gap-3 items-center py-1 rounded-xl text-white text-2xl font-semibold hover:scale-110 transition-transform'>
          Buy Now <IoCartOutline className="text-3xl"/>
        </Link>
      </div>
    </div>
  );
};
