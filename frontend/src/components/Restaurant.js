import React from 'react'

function Restaurant({restaurant}) {
    return (
        <div>
            <h3>
                {restaurant.r_name}
            </h3>
        </div>
    )
}

export default Restaurant
