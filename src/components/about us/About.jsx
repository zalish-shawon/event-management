
const About = () => {
    return (
        <div>
            <div className="hero h-[300px]" style={{ backgroundImage: 'url(/public/bg3.png)', backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About us</h1>
                        <h3 className="mb-5 text-2xl">Event Management Company</h3>

                    </div>
                </div>
            </div>
            <div className="p-10 flex flex-col lg:flex-row justify-center items-center">
                <div className="flex-1">
                    <h3 className="mb-5 text-2xl font-bold">Event Management Company</h3>
                    <p className="text-xl">Whereas media application. Distinctive parall functionalize mindshare rather than bricks-and-clicks schema. Dramatical reconceptualize synergistic channel whereas tactical community repurpose granular quality. Competent syndicate vertical infomediaries with inexpensive methodologies.
                    Compell utilize integrated infomediary without ethic content. Convenient negotiate sustainable innovation vis-a-vis economically sound paradigms.</p>
                </div>
                <div className="flex-1">
                    <img className="p-10" src="/01.png" alt="" />
                </div>
                
            </div>
            <div className="p-14">
                  <div>
                        <h1 className="text-5xl text-center mb-8">Our Winning Award</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-3">
                    <div className="flex flex-col items-center border-2 border-red-400 rounded-lg p-10">
                        <img className="w-[142px] mb-3" src="/badge.png" alt="" />
                        <p className="text-center">Unlimitcon recently wined the Master of Event Award 2020 Award. It was the largest achivement for them. In last year they ware worked 200+ events successfully. Globally revolutionize B2B e-markets without superior.</p>
                    </div>
                    <div className="flex flex-col items-center border-2 border-red-400 rounded-lg p-10">
                        <img className="w-[150px] mb-3" src="/badge2.png" alt="" />
                        <p className="text-center">Unlimitcon recently wined the Master of Event Award 2020 Award. It was the largest achivement for them. In last year they ware worked 200+ events successfully. Globally revolutionize B2B e-markets without superior.</p>
                    </div>
                    <div className="flex flex-col items-center border-2 border-red-400 rounded-lg p-10">
                        <img className="w-[95px] mb-3" src="/badge3.png" alt="" />
                        <p className="text-center">Unlimitcon recently wined the Master of Event Award 2020 Award. It was the largest achivement for them. In last year they ware worked 200+ events successfully. Globally revolutionize B2B e-markets without superior.</p>
                    </div>
                    </div>
                    
                </div>
        </div>
    );
};

export default About;