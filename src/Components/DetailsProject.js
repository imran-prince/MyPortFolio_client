import React from 'react';
import { useParams } from 'react-router-dom';
import useGetProject from './useGetProject';

const DetailsProject = () => {
    const [projects] = useGetProject()
    const { id } = useParams()

    const projectInfo = projects?.find((project) => project._id === id)
    return (
        <>
        <h1 className='text-center text-6xl py-10 font-bold'>Project Details  </h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={projectInfo?.img} className="max-w-sm rounded-lg shadow-2xl" alt='Project' />
                    <div>
                        <h1 className="text-5xl font-bold">{projectInfo?.name}</h1>
                        <p className="py-6">Project_Features <br />{projectInfo?.description}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsProject;