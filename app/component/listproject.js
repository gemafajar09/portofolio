import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';

export default function Listproject({index}) {
  const controls = useAnimation();
    return(
      <motion.div
        initial={{ opacity: 1 }}
        animate={controls}
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