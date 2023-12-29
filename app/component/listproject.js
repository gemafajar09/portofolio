import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Listproject({index}) {
  const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({ opacity: 1 - scrollY / 400, y: scrollY / 3 });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    const cardVariants = {
      offscreen: {
        x: 200,
        opacity: 0
      },
      onscreen: {
        x: 15,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          delay: 0.2 * index,
      },
      }
    };

    return(
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        className="mt-10 shadow-md bg-white rounded-[8px] hover:scale-105">
            <Image
              className="w-full"
              alt="Vercel Logo"
              height={400}
              src="/gambarweb.svg"
              width={400}
            />
            <div className="p-3">
              <p className="font-Roboto_Condensed font-bold text-[16px] text-black">Parqur Pertamina Apps</p>
              <p className="text-black font-Roboto_Condensed">Aplikasi tenteang prrekapan data refueling PT. Kualanamu Group</p>
            </div>
            <div className="flex justify-end">
              <button className="p-2 bg-[#141414] text-white hover:bg-gray-600 m-2 rounded-md">Show More</button>
            </div>
        </motion.div>
    )
}