/* eslint-disable react/no-unknown-property */
import Service from "../service/Service";

import Plan from "../plan/Plan";


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
                <Plan></Plan>
            </div>
        </div>

    );
};

export default Home;