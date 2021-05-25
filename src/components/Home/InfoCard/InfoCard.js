import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = (props) => {
    const { icon, title, description} = props.data; 
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="text-center">
                <FontAwesomeIcon icon={icon} className="icon p-1"></FontAwesomeIcon>
                <h3 className='text-primary'>{title}</h3>
                <p className='text-secondary'>{description}</p>
            </div>
        </div>
    );
}

export default InfoCard;
