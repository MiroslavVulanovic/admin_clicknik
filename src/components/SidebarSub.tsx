import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarDataItem } from './SidebarData'
import SidebarSubItem from './SidebarSubItem'

interface Item {
  item: SidebarDataItem
}

const SidebarSub = ({ item }: Item) => {
  const [subnav, setSubnav] = useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
    <div className='flex-col font-thin text-white m-2'>
      <Link
        to={item.path}
        onClick={item.subNav && showSubnav}
        className='flex justify-between items-center text-white h-7 text-sm hover:bg-blue-300 hover:cursor-pointer'
      >
        <div className='flex justify-between items-center text-white'>
          {item.icon}
          <label className='mt-3.5 my-3 cursor-pointer ml-2'>
            {item.title}
          </label>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav &&
        item.subNav.map((item, index) => {
          return <SidebarSubItem item={item} key={index} />
        })}
    </div>
  )
}

export default SidebarSub
