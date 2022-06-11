import React, { useEffect, useState } from 'react';

const useGetProject = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('https://aqueous-falls-30488.herokuapp.com/allproject')
            .then(rs => rs.json())
            .then(data => setProject(data))
    }, [])
    return [projects]
         
     
};

export default useGetProject;