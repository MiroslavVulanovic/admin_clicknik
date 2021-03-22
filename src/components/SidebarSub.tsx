import React from 'react'
import {Link} from 'react-router-dom';


const SidebarSub = ({item}:{[key:string]:any}) => {
    return (
        <div className="flex-col font-thin text-white m-3">
            <Link to={item.path}>
                <label className="my-3 cursor-pointer">{item.title}</label>
            </Link>
            {/* {item.subNav.map((item: any, index: any) => {
                return (
                    <Link to={item.path} key={index}>
                        <label>{item.title}</label>
                    </Link>
                );
            })} */}
        </div>
    )
}

export default SidebarSub
