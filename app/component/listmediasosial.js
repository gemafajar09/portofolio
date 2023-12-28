import Image from 'next/image'
export default function Mediasosial({data}) {
    return (
        <>
            <li className="flex">
                <Image
                    alt="Vercel Logo"
                    height={26}
                    src={data.gambar}
                    width={26}
                  />
                <span className="ml-2 text-gray-500 dark:text-white">{data.nama}</span>
              </li>
        </>
    )
}