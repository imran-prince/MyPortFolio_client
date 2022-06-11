import React from 'react';
import SingleProject from './SingleProject';
import useGetProject from './useGetProject';

const AllProject = () => {
    const [projects] = useGetProject()
    return (
        <div className=''>
            <h1 className='text-center font-bold text-6xl text-white '>Some Projects</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10 my-16'>
                {
                    projects.map(project => <SingleProject key={project._id} project={project}></SingleProject>)
                }
            </div>

        </div>
    );
};

export default AllProject;