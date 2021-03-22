import React from 'react'
import {Link} from 'react-router-dom';
import { SidebarDataItem, SidebarDataSubitem } from './SidebarData';


const SidebarSub = ({item}: SidebarDataItem | any) => { // TODO: Explore why any type has to be explicit here
    console.log('item', item);

    return (
        <div className="flex-col font-thin text-white m-3">
            <Link to={'#'}>
                <label className="my-3 cursor-pointer">{item.title}</label>
            </Link>
            {item.subNav && item.subNav.map((item: SidebarDataSubitem, index: any) => {
                return (
                    <Link to={'#'} key={index}>
                        <label>{item.title}</label>
                    </Link>
                );
            })}
        </div>
    )
}

export default SidebarSub
