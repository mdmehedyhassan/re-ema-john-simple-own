import React from 'react';
import NoMatch404 from '../../images/noMatch404.gif';


const NoMatch = () => {
    return (
        <div className="text-center">
            <img className="h-50" src={NoMatch404} alt=""/>
        </div>
    );
};

export default NoMatch;