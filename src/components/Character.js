// Write your Character component here
import React from 'react';

const Character = props => {
    return (
        <div>
            {props.info.name}
            {/* <button onClick={() => openDetails(props.info.name)}> */}
                {/* See details
            </button> */}
        </div>
    )
}

export default Character;