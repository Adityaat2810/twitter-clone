import { FaTwitter,FaHashtag, FaRegBell, FaRegEnvelope, FaRegBookmark } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { Inter } from "next/font/google";
import { CiUser } from "react-icons/ci";


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
    title: "Profile",
    icon: <CiUser />



  },


]

export default function Home() {
  return (
    <div className={inter.className}>

      <div className="grid grid-cols-12 h-screen w-screen px-56">

        <div className="col-span-3  pt-8 px-4">
          <div className="text-3xl hover:bg-gray-600 rounded-full p-2 h-fit w-fit cursor-pointer transition-all">
            <FaTwitter />
          </div>

          <div className="mt-4 text-2xl font-semibold pr-4">
            <ul>
              {sideBarMenuItem.map(item => <li className="flex justify-start items-center gap-4  hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-2" key={item.title} >
                <span>{item.icon}</span> <span>{item.title}</span>
              </li>)}
            </ul>

            <div className=" mt-5 pr-20">
              
            

            <button className="bg-[#1d9bf0] text-lg p-3 rounded-full h-fit w-full">Tweet</button>

           </div>
          </div>



        </div>


        <div className="col-span-6 border-r-[1px] border-l-[1px]  border-slate-500 "></div>
        <div className="col-span-3"> </div>


      </div>
    </div>
  )
}