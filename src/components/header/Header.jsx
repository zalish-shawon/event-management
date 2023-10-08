/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    
    const handleLogOut = () => {
        logOut()
        .then(res => {
            toast.success('User logged out')

        })
        .catch(error => {
            console.error(error.message);
        })
    }
    return (
        <div className='bg-slate-200'>
            <Toaster
                position="top-right"
                reverseOrder={false}
                />
            <div className="w-[95%] mx-auto">
                <nav>
                    <div className="navbar bg-slate-200">

                        <div className="flex-1 mr-4">
                            <img className="w-[120px]" src="/public/logo.png" alt="" />
                        </div>
                        <div className="flex-none">
                            <ul className="flex gap-5 items-center font-semibold">

                                <NavLink to={"/"}><a className="">Home</a></NavLink>
                                <NavLink to={"/about"}><a className="">About</a></NavLink>
                                <NavLink to={"/contact"}><a className="">Contact</a></NavLink>
                                {
                                    user ?
                                        <div className="flex flex-col lg:flex-row items-center justify-center gap-3">
                                            <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                                                <p>{user?.displayName}</p>
                                                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user.photoURL} alt="" />
                                            </div>
                                            <a onClick={handleLogOut} className="hover:text-orange-600 btn btn-primary">Logout</a>
                                            </div>
                                            :
                                            <NavLink to={"/login"}><a className="hover:text-orange-600 btn btn-primary">Login</a></NavLink>
                                }
                                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Header;