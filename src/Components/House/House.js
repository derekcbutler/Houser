import React from 'react';

function House (props) {
        return(
            <div>
                Home Listings
                {props.listings}
            </div>
        )
}

export default House;