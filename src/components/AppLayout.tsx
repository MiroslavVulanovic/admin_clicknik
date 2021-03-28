import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import auth from './auth';

const AppLayout = (props: any) => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <Navbar />
            <button className="h-8 w-40 bg-blue-200 hover:bg-blue-300 mt-1 mr-1 text-white font-bold py-1 px-2 rounded"
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
    )
}

export default AppLayout;