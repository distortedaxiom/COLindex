import React, { useState, useEffect } from 'react';

const SidebarDisplay = (props) => {
    console.log(props.data)
    return (
        <div>
            <h2>{props.data.state}</h2>
        </div>
    )
}

export default SidebarDisplay
