import React,{Fragment} from 'react';

export const GifGridItem = ({title, url}) => {

    return (

        <Fragment>
            <div className="card animate__animated animate__fadeIn">
                <img src={url} alt={title}/>
                <p>{title}</p>
            </div>
        </Fragment>

    );

};
