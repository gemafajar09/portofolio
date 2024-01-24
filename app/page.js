"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import Switch from "react-switch";
import Listproject from "./component/listproject"
import Mediasosial from "./component/listmediasosial"
import Listexperience from "./component/listexperience"
import Listskill from "./component/listskill"
import Title from "./component/title"

export default function Home() { 
  const [checked, setChecked] = useState(false)
  const [today, setDate] = useState(new Date());
  const [darkMode, setDarkMode] = useState(true);

  const [option, setoption] = useState("website")

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleChange = () => {
    setChecked(!checked)

    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  }

  const isiData = [
                    {'gambar' : '/github.svg', 'nama' : 'gemafajar09'},
                    {'gambar' : '/gitlab.svg', 'nama' : 'gemafajar09'},
                    {'gambar' : '/instagram.svg', 'nama' : 'gemafajar04'},
                    {'gambar' : '/linkedin.svg', 'nama' : 'gemafajar04'},
                    {'gambar' : '/email.svg', 'nama' : 'gemafajar09@gmail.com'}
                  ]

  const getDayName =(date = new Date(), locale = 'id') => {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }

  useEffect(() => {
    const timer = setInterval(() => { 
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    }
  })

  return (
    <div className="bg-white dark:bg-black">
    {/* header */}
      <div className="flex justify-between p-6">
        <div>
          <span className='text-gray-500  dark:text-white text-[16px]'>Time <b className='text-lg font-bold text-[32px]'>{today.getHours()}:{today.getMinutes()}</b> am</span>
        </div>
        <div>
          <Switch onChange={() => handleChange()} 
              checked={checked}
              offColor={'#f2f4f5'}
              onColor={'#c9c9c9'}
              onHandleColor={'#57e34b'}
              offHandleColor={'#2e2e2d'}
              checkedIcon={false}
              uncheckedIcon={false}
              checkedHandleIcon={
              <div className="p-1">
                <Image
                  alt="Vercel Logo"
                  height={26}
                  src="/checked.svg"
                  width={26}
                />
              </div>
              } 
              uncheckedHandleIcon={
                <div className="p-1">
                  <Image
                    alt="Vercel Logo"
                    height={26}
                    src="/unchecked.svg"
                    width={26}
                  />
                </div>
              } 
              />
        </div>

      </div>

    {/* wheather */}
      <div className="absolute top-[13%] right-[10%] flex flex-col text-right">
        <Image
          alt="Vercel Logo"
          height={40}
          src="/cuaca.svg"
          width={40}
        />
      </div>

      <div className="absolute top-20 right-5 flex flex-col text-right text-gray-500 dark:text-white">
        <span>{getDayName(today)}, {today.getDate()} / {today.getMonth()} / {today.getFullYear()} </span>
        <span>27°C°F</span>
        <span>Presipitasi: 15%</span>
        <span>Kelembapan: 94%</span>
        <span>Angin: 3 km/h</span>
      </div>

    {/* About */}
      <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center">
            <Image
              alt="Vercel Logo"
              height={300}
              src="/backdrop.svg"
              width={300}
            />
            <Image
            className="absolute top-[13%]"
              alt="Vercel Logo"
              height={480}
              src="/profile.svg"
              width={480}
            />
            <div className="absolute h-20 rounded-md top-[43%] w-[20%] bg-gray-600 dark:bg-[#41B883] flex justify-center items-center gap-4">
                  <p className="font-Roboto_Condensed hover:text-teal-600 cursor-pointer">Home</p>
                  <p>/</p>
                  <p className="font-Roboto_Condensed hover:text-teal-600 cursor-pointer">About</p>
                  <p>/</p>
                  <p className="font-Roboto_Condensed hover:text-teal-600 cursor-pointer">Portofolio</p>
            </div>
          </div>

          <div className="col-span-2 text-gray-500 dark:text-white">
            <p className="font-just text-[64px] dark:text-[#AEA18D]">Hi There! i'm</p>
            <p className="font-just text-[40px] dark:text-[#AEA18D]">Gema Fajar Ramadhan</p>
            <p className="font-Roboto_Condensed text-[20px] mt-8">Web & Mobile Dev</p>
            <p className="font-Roboto_Condensed text-[16px] mt-8 mr-[20%]">Menguasai teknologi penuh tumpukan, termasuk pengembangan frontend dan backend, serta integrasi database untuk menciptakan solusi web yang lengkap dan efisien. Memiliki pengalaman yang kaya dalam pengembangan aplikasi web yang sukses, mulai dari konsep hingga implementasi dan pemeliharaan.</p>

            <ul className="mt-10 flex gap-4">
              {
                isiData.map((v,i) => (
                  <Mediasosial key={i} data={v}/>
                ))
              }
            </ul>
          </div>
      </div>

    {/* Experience */}
      <Title title="Experience"/>
      <p className="text-gray-500 dark:text-white ml-10 mt-5">Pengalaman Yang Saya Punya.</p>
      <div className="grid grid-cols-2 gap-4">
        {
          [1, 2, 3, 4, 5].map((_, i) => (
            <Listexperience delays={i}/>
          ))
        }
               
      </div>

    {/* selected project */}
      <div className="dark:bg-[#141414] mt-10 mb-10 pb-10 text-gray-500 dark:text-white">
        <div className="flex justify-between">
          <Title title="Selected Project"/>
          <p className="text-[36px] font-Roboto_Condensed font-bold pt-10 ml-10 mr-10 hover:text-green-600 border-b-2 w-max">Show More</p>
        </div>
        <p className="ml-10 mt-5 ">Semua project yang pernah saya kerjakan.</p>

        <div className="w-1/4 mt-3">
          <div className="right-0">
            <ul
              className="flex gap-3 ml-10 flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
              data-tabs="tabs"
              role="list"
            >
              <li className="z-30 flex-auto text-center" onClick={(_) => setoption("website")}>
                <a
                  className={`${option == 'website' ? 'outline' : 'hover:outline'} z-30 outline-green-400 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer dark:text-white bg-inherit`}
                  data-tab-target=""
                  active=""
                  role="tab"
                  aria-selected="true"
                  aria-controls="app"
                >
                  <span className="ml-1">Website</span>
                </a>
              </li>
              <li className="z-30 flex-auto text-center" onClick={(_) => setoption("android")}>
                <a
                  className={`${option == 'android' ? 'outline' : 'hover:outline'} z-30 outline-green-400 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer dark:text-white bg-inherit`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  aria-controls="message"
                >
                  <span className="ml-1">Android</span>
                </a>
              </li>
              <li className="z-30 flex-auto text-center" onClick={(_) => setoption("uiux")}>
                <a
                  className={`${option == 'uiux' ? 'outline' : 'hover:outline'} z-30 outline-green-400 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer dark:text-white bg-inherit`}
                  data-tab-target=""
                  role="tab"
                  aria-selected="false"
                  aria-controls="settings"
                >
                  <span className="ml-1">UI/UX</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-5 pl-10 pr-10">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
              <Listproject key={i} index={i}/>
          ))
        }

        </div>
      </div>

    {/* floating action button */}
      <button title="Contact Sale"
        className="fixed z-90 bottom-10 right-8 bg-gray-200 dark:bg-white w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-400 hover:drop-shadow-2xl hover:animate-bounce duration-300">
          <Image
            alt="Vercel Logo"
            height={40}
            src="/whatsapp.svg"
            width={40}
          />
      </button>


    {/* programming Language */}
    
      <Title title="Programming Language"/>
      <p className="text-gray-500 dark:text-white ml-10 mt-5">Skill Pemograman yang saat ini saya miliki.</p>
      
      <ul className="flex justify-center gap-4 ml-10 mt-5 mb-10">
        {
          isiData.map((a,i) => (
            <Listskill image={a.gambar} key={i}/>
          ))
        }
      </ul>

    </div>

  )
}
