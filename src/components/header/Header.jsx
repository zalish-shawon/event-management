import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-200'>
            <div className="w-[95%] mx-auto">
                <nav>
                    <div className="navbar bg-slate-200">

                        <div className="flex-1 mr-4">
                            <img className="w-[120px]" src="/public/logo.png" alt="" />
                        </div>
                        <div className="flex-none">
                            <ul className="flex gap-5 items-center font-semibold">
                                <Link to={"/"}><a className="hover:text-orange-600">Home</a></Link>
                                <Link to={"/donation"}><a className="hover:text-orange-600">Donation</a></Link>
                                <Link to={"/statistics"}><a className="hover:text-orange-600">Statistics</a></Link>
                                <Link to={"/login"}><a className="hover:text-orange-600">Login</a></Link>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Header;