import React from 'react';
import {Link} from 'react-router-dom';
import {SidebarDataSubitem } from './SidebarData';

interface SubItem {
  item: SidebarDataSubitem;
}

const SidebarSubItem = ({item}: SubItem) => {
  return(
    <Link to={item.path} className="flex justify-start items-center text-white h-7 text-xs pl-4 hover:bg-blue-300 hover:cursor-pointer">
      {item.icon}
      <label className="ml-1 hover:cursor-pointer">{item.title}</label>
    </Link>
  );
}

export default SidebarSubItem;