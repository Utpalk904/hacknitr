import React from 'react';
import PropTypes from 'prop-types';
import '../Css/Service.css';

export default function Service(props) {
  return (
    <div className='service-card'>
        <div className="service-icon">{props.serviceIcon}</div>
        <div className="service-name">{props.serviceName}</div>
        <hr/>
        <div className="service-desc">{props.serviceDesc}</div>
    </div>
  );
}

Service.propType={
    serviceIcon: PropTypes.elementType,
    serviceName: PropTypes.string,
    serviceDesc: PropTypes.string
}
