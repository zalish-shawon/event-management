/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ item }) => {
    const {id, categoryName, short_description, category_img, price} = item
    return (
        <div>
            <div className="card h-[450px] bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={category_img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{short_description}</p>
                    <p>{price}</p>
                    <Link to = {`/details/${id}`}>
                    <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;