import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';




export default function HeroSlider() {
  const [realSlide, setRealSlide] = useState(0)
  return (



    <Swiper
      modules={[Navigation, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      effect="fade"
      loop
      allowTouchMove={false}
      speed={2000}
      autoplay={{ delay: 7000 }}
      onSlideChange={(e) => { setRealSlide(e.realIndex); }}
    >

      <SwiperSlide>
        <div className='w-full relative flex flexCenter h-screen bg-[url("./panar2.jpg")] bg-cover'>
          {realSlide === 0 &&
            <div className=' container flex gap-6 flex-col items-start'>
              <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-white font-bold text-xl w-fit'
              >اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة والتي تلبي احتياجاتك بأسعار لا تقاوم
              </motion.h2>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 1.2 }}
                className=' my-8 text-white font-Reem  w-fit text-9xl font-extrabold'
              >تجربة استثنائية</motion.h1>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 100 }}
                transition={{ duration: 0.5, delay: 2 }}
                className='button1 px-6 h-14 w-52 font-bold text-white'>ابدأ التسوق</motion.button>
            </div>
          }
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full relative flex flexCenter h-screen bg-[url("./panar.jpg")] bg-cover'>
          {realSlide === 1 &&
            <div className=' container flex gap-6 flex-col items-start'>
              <motion.h2
                initial={{ x: 500, rotate: 90, opacity: 0 }}
                animate={{ x: 0, rotate: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-white font-bold text-xl w-fit'
              >اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة والتي تلبي احتياجاتك بأسعار لا تقاوم
              </motion.h2>
              <motion.h1
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 10 }}
                transition={{ duration: 1, delay: 1.2 }}
                className=' my-8 text-white font-Reem  w-fit text-9xl font-extrabold'
              > متجر مبدع</motion.h1>
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.5, delay: 2, ease: "easeInOut" }}
                className='button1 px-6 h-14 w-52 font-bold text-white'>ابدأ التسوق</motion.button>
            </div>
          }
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='w-full relative flex flexCenter h-screen bg-[url("./panar3.jpg")] bg-cover'>
          {realSlide === 2 &&
            <div className=' container flex gap-6 flex-col items-start'>
              <motion.h2
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className=' text-white font-bold text-xl w-fit'
              >اكتشف مجموعتنا الواسعة من المنتجات عالية الجودة والتي تلبي احتياجاتك بأسعار لا تقاوم
              </motion.h2>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 1.2 }}
                className=' my-8 text-white font-Reem  w-fit text-9xl font-extrabold'
              >ابدأ الان</motion.h1>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 100 }}
                transition={{ duration: 0.5, delay: 2 }}
                className='button1 px-6 h-14 w-52 font-bold text-white'>ابدأ التسوق</motion.button>
            </div>
          }
        </div>
      </SwiperSlide>

    </Swiper>
  )
}
