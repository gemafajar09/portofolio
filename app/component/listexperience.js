import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

export default function Listexperience({delays}) {
    const ref = useRef(null);

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
          y: 200,
          opacity: 0
        },
        onscreen: {
          y: 5,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            delay: 0.2 * delays,
        },
        }
      };

    return(
        
        <div ref={ref}>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="flex ml-10 mr-10 mt-10">
                <div className="flex flex-col max-w-max">
                    <p className="text-green-600">2022.11 - Sekarang</p>
                    <p className='text-gray-500 dark:text-white'>Mediatama Web</p>
                </div>
                <div className="ml-10 text-gray-500 dark:text-white">
                    <p className="font-bold mb-5">Manager SDM & Pengembanga skill</p>
                    <div>
                        <ul className="list-disc">
                            <li>Bertanggung jawab dalam pengembangan tingkat kemampuan karyawan.</li>
                            <li>Menjadi penghubung antara Manajemen dengan karyawannya.</li>
                            <li>Menangani isu-isu ketenagakerjaan, seperti memediasi pertikaian dan mengarahkan prosedur kedisiplinan.</li>
                            <li>Mengkordinir dan mengawasi pekerjaan para pegawai khusus dan staf pendukung.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}