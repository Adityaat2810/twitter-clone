import React from 'react'
import Image from 'next/image'
import { BiMessageRounded } from 'react-icons/bi'
import { AiOutlineRetweet } from 'react-icons/ai'
import { CiHeart } from 'react-icons/ci'
import { GoUpload } from 'react-icons/go'

const FeedCard: React.FC = () => {
    return (
        <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer'>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-1'>
                    <Image className='rounded-full' src="https://avatars.githubusercontent.com/u/123733113?v=4" alt='user-image' height={50} width={50} />
                </div>

                <div className='col-span-11'>
                    <h5>Aditya Saini</h5>

                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum eum iste, iure placeat maxime, doloribus dolores neque doloremque id cumque voluptatem inventore consequatur quam ullam voluptate saepe minima, autem quod.
                    </p>

                    <div className='flex justify-between mt-5 text-xl items-center  p-2 w-[90%]'>

                        <div >
                            <BiMessageRounded />
                        </div>

                        <div >
                            <AiOutlineRetweet />
                        </div>

                        <div >
                            <CiHeart />
                        </div>

                        <div >
                            <GoUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeedCard