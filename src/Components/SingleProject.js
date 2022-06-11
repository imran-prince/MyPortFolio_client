import React from 'react';
import { useNavigate } from 'react-router-dom';
const SingleProject = ({ project }) => {
    const { name, _id, img ,description} = project
    const navigate=useNavigate()
    return (
        <div>
            <div className="card w-96 glass"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                <figure><img src={img} alt="Project!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {navigate(`/details/${_id}`)}} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleProject;