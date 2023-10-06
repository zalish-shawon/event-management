import Service from "../service/Service";

const Home = () => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: 'url(/public/event.jpg)', backgroundSize: 'cover' }}>
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
        </div>

    );
};

export default Home;