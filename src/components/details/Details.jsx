/* eslint-disable react/no-unknown-property */
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams()
    const services = useLoaderData()
    const details = services.find(item => item.id == id)
    
    return (
        <div className="p-12">
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${details.category_img})`, backgroundSize: 'cover' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{details.categoryName}
                        </h1>
                        <p>{details.short_description}</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 w-full">

                <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    
                        <div class="flex flex-col justify-between p-4 leading-normal">
                        <div className="badge badge-secondary">{details.price}</div>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.description}</p>
                        </div>
                </div>
            <div className="flex justify-center mt-5">
               <NavLink to={"/contact"}> <button className="btn btn-primary">Book Now</button></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Details;