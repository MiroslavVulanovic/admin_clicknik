import React from 'react';
import {CgProfile} from 'react-icons/cg';
import auth from './auth';
import { withRouter } from "react-router";


const Navbar = (props: any) => {
    return (
            <div className="bg-blue-100 flex justify-end border-b border-gray-600 h-10">
                    <div className="flex flex-col items-center px-2">
                        <CgProfile size={30} className="mt-1"/>
                        <span className="text-xs">Admin</span>
                    </div>
                    <button className="logoutButton h-7 w-30 bg-blue-200 hover:bg-blue-300 mt-1 mr-1 text-white text-sm font-normal py-1 px-2 rounded"
                            onClick={
                                () => { auth.logout(()=>{
                                        props.history.push('/');
                                    })
                                }
                            }
                    >
                        Log Out
                    </button>
            </div>
    );
}

export default withRouter(Navbar);
