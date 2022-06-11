import React, { useEffect, useState } from 'react';

const useGetProject = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allproject')
            .then(rs => rs.json())
            .then(data => setProject(data))
    }, [])
    return [projects]
         
     
};

export default useGetProject;