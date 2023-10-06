
import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

const Service = () => {
    const [service, setService] = useState([])

    useEffect(()=> {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        
        <div className='bg-slate-300'>
            <div className='text-center p-8'>
                <p className='text-2xl'>Our Services</p>
                <h1 className='text-5xl font-bold'>What We Offer</h1>
            </div>

            <div className="w-[90%] mx-auto grid grid-cols-3 gap-3 pb-10">
                {
                    service.map(item => <ServiceCard key={item.id} item={item}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;