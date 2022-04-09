// header contains 3 sections left  center and right 
import Image from 'next/image';
//Image componet provies - image optmization , lazy loading , devliers the .webp version which is a highly compressed format(Makes app Fast !)
import {
    BellIcon, ChatIcon, HomeIcon, ChevronDownIcon, UserGroupIcon, ViewGridIcon
} from "@heroicons/react/solid"
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            {/* Left   -facebook icon and a searcbar */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout='fixed' />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2 '>
                    <SearchIcon className='h-6 text-gray-600 ' />
                    <input className='hidden md:inline-flex flex ml-3  items-center bg-transparent outline-none' type="text" placeholder='Search Facebook' />
                </div>
            </div>
            {/* center */}
            <div className='flex justify-center flex-grow   '>
                <div className='flex items-center space-x-6 md:space-x-2 '>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon active={true} Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* profile picture */}
                <p className="    whitespace-nowrap font-semibold px-3  "  >John Doe</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>

            </div>
            

        </div>
    )
}

export default Header   