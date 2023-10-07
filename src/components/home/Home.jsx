/* eslint-disable react/no-unknown-property */
import Service from "../service/Service";
import { MdDone } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';


const Home = () => {
    return (
        <div>

            
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(/event.jpg)', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Crafting Moments that Matter</h1>
                        <p className="mb-5">Welcome to social events, your ultimate destination for celebrating life's special moments. Explore a world of social events, from weddings and parties to birthday parties and more. Discover inspiration, connect with event professionals. Join us in the art of celebration!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div>
                <Service></Service>
            </div>
            <div className="p-14">
                <div>
                    <h1 className="text-5xl text-center mb-7">Amazing Sponsors</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                    <img src="/logo1.png" alt="" />
                    <img src="/logo2.png" alt="" />
                    <img src="/logo3.png" alt="" />
                    <img src="/logo4.png" alt="" />
                    <img src="/logo5.png" alt="" />
                </div>
            </div>
            <div>
                
                <div className="font-sans bg-gray-100 pb-14 pt-5">
                <div class="min-h-screen flex justify-center items-center">
        <div class="">
            <div class="text-center font-semibold">
                <h1 class="text-5xl">
                    <span class="text-blue-700 tracking-wide">Flexible </span>
                    <span>Plans</span>
                </h1>
                
            </div>
            <div class="pt-24 flex flex-row">
                
                <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                    <h1 class="text-black font-semibold text-2xl">Basic</h1>
                    <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold">10</span>
                        <span class="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr class="mt-4 border-1"/>
                    <div class="pt-8">
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2"> 
                            Event  <span class="text-black">Attendance</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                Flexible <span class="text-black">team meetings</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                <span class="text-black">Free Wifi and</span> facility
                            </span>
                        </p>

                        <a href="#" class="">
                            <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span class="font-medium">
                                    Choose Plan
                                </span>
                                <span class="pl-2 material-icons align-middle text-sm">
                               
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
                
                <div class="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                    <h1 class="text-white font-semibold text-2xl">Startup</h1>
                    <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold">24</span>
                        <span class="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr class="mt-4 border-1 border-gray-600"/>
                    <div class="pt-8">
                    <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                All features in <span class="text-white">Basic</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                Flexible <span class="text-white">call scheduling</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                <span class="text-white">Networking Area</span> Access
                            </span>
                        </p>

                        <a href="#" class="">
                            <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span class="font-medium">
                                    Choose Plan
                                </span>
                                <span class="pl-2 material-icons align-middle text-sm">
                              
                                </span>
                            </p>
                        </a>
                    </div>
                    <div class="absolute top-4 right-4">
                        <p class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
                
                <div class="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                    <h1 class="text-black font-semibold text-2xl">Enterprise</h1>
                    <p class="pt-2 tracking-wide">
                        <span class="text-gray-400 align-top">$ </span>
                        <span class="text-3xl font-semibold">35</span>
                        <span class="text-gray-400 font-medium">/ user</span>
                    </p>
                    <hr class="mt-4 border-1"/>
                    <div class="pt-8">
                    <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                All features in <span class="text-black">Startup</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                Growth <span class="text-black">oriented</span>
                            </span>
                        </p>
                        <p class="font-semibold text-gray-400 text-left flex items-center">
                            <span class="material-icons align-middle">
                            <MdDone></MdDone>
                            </span>
                            <span class="pl-2">
                                <span class="text-black">Unlimited</span> Free lotary
                            </span>
                        </p>

                        <a href="#" class="">
                            <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <span class="font-medium">
                                    Choose Plan
                                </span>
                                <span class="pl-2 material-icons align-middle text-sm">
                                   
                                </span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;