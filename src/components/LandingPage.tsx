import React from 'react';
import auth from './auth';

const LandingPage = (props: any) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-blue-200">
            <form className="border w-4/12 bg-blue-100 p-3 rounded" >
                <h1 className="text-center text-xl font-bold">Somina Admin</h1>
                <label className="block">
                    <span>Username</span>
                    <input className="form-input border block w-10/12" placeholder="Enter username" />
                </label>
                <label className="block">
                    <span>Password</span>
                    <input className="form-input border block w-10/12" placeholder="Enter password" />
                </label>
                <button className="bg-blue-200 hover:bg-blue-300 mt-3 text-white font-normal py-1 px-4 rounded"
                    onClick={
                        () => { auth.login(()=>{
                                props.history.push('/app');
                            })
                        }
                    }
                >
                Log In
                </button>
            </form>
        </div>
    )
}

export default LandingPage;