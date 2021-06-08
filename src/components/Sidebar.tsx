import React from 'react'

import { SidebarData } from './SidebarData'
import SidebarSub from './SidebarSub'

const Sidebar = () => {
  return (
    <div className='bg-blue-200 w-2/12 h-screen'>
      <div className='border-b-default border-gray-600 h-10 text-sm font-thin text-white pl-3 pt-2'>
        ClickNik CMS ADMIN
      </div>
      {SidebarData.map((item, index) => {
        return <SidebarSub item={item} key={index} />
      })}
    </div>
  )
}

export default Sidebar
