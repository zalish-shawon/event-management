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

                                <NavLink to={"/"}><a className="hover:text-orange-600">Home</a></NavLink>
                                <NavLink to={"/donation"}><a className="hover:text-orange-600">Donation</a></NavLink>
                                <NavLink to={"/statistics"}><a className="hover:text-orange-600">Statistics</a></NavLink>
                                {
                                    user ?
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex justify-center items-center gap-3">
                                                <p>{user?.email}</p>
                                                <img className="w-[50px] rounded-full" src={user.photoURL} alt="" />
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