
import Image from 'next/image'

export default function Listskill({image}) {
    return(
        <>
            <li className="hover:scale-125 cursor-pointer">
                <Image
                    alt="Vercel Logo"
                    height={70}
                    src={image}
                    width={70}
                />
            </li>
        </>
    )
}