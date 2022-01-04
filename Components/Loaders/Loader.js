import React from 'react'

const Loader = (props) =>{
    return(
        <div className="Loader">
            <div className="preloader"></div>
            <p className="Loader_Text">{props.message}</p>
        </div>
    )
}

export default Loader