import React from 'react';
// import {Link} from 'react-router-dom';
import { SidebarData } from './SidebarData';
import SidebarSub from './SidebarSub';

const Sidebar = () => {
    return (
        <div className="bg-blue-200 w-1/6 h-screen">
            <div className="border-b-default border-gray-600 h-10 font-thin text-white pl-3 pt-2">ClickNik CMS ADMIN</div>
            {SidebarData.map((item, index) => {
              return <SidebarSub item={item} />;
            })}
        </div>
    );
}

export default Sidebar;