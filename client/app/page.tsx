import { FaTwitter,FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import { CiUser } from "react-icons/ci";
import FeedCard from "@/components/FeedCard";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "@/components/GoogleLoginBitton";


const inter =Inter({subsets:['latin']})

interface TwitterSideBarButton {
  title: string
  icon: React.ReactNode
}

const sideBarMenuItem: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <IoHomeOutline />
  },
  {
    title: "Explore",
    icon: <FaHashtag />
  },
  {
    title: "Notifications",
    icon: <FaRegBell />

  },
  {
    title: "Messages",
    icon: <FaRegEnvelope />

  },

  {
    title: "Bookmarks",
    icon: <FaRegBookmark />


  }, 
  {
    title:"Twitter Blue",
    icon:<RiMoneyDollarBoxLine />


  },
  {
    title: "Profile",
    icon: <CiUser />
  },
  {
    title:"More",
    icon:<SlOptions />

  }
 

  



]

export default function Home() {
  return (
    <div className={inter.className}>

      <div className="grid grid-cols-12 h-screen w-screen px-56">

        <div className="col-span-3  pt-2 ml-28">
          <div className="text-2xl hover:bg-gray-600 rounded-full p-2 h-fit w-fit cursor-pointer transition-all">
            <FaTwitter />
          </div>

          <div className="mt-2 text-1xl font-semibold pr-4">
            <ul>
              {sideBarMenuItem.map(item => <li className="flex justify-start items-center gap-4  hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key={item.title} >
                <span className="text-2xl">{item.icon}</span> <span>{item.title}</span>
              </li>)}
            </ul>

            <div className=" mt-5 pr-20">
              
            

            <button className="bg-[#1d9bf0] text-lg py-2 px-4 rounded-full h-fit w-full">Tweet</button>

           </div>
          </div>



        </div>


        <div className="col-span-5 border-r-[1px] border-l-[1px]  border-gray-600 h-screen  overflow-scroll">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>

        </div>
        <div className="col-span-3 p-5">
          <div className="p-5  bg-slate-700 rounded-lg ">
            <h1 className="my-2">New to Twitter ?</h1>
            <GoogleLoginButton />
          </div>
        </div>


      </div>
    </div>
  )
}