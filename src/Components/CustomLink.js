import React from 'react';
import {
    
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{fontSize:'20px', color: match ? "red" : "white" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            
        </div>
    );
};

export default CustomLink;