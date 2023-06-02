import React from 'react';
import Icon from '../Icon/Icon';
import './Cta.scss';
import { Link } from 'react-router-dom';

function Cta(props) {
  const cssClass = 'Cta';
  const content = props.icon ? <Icon icon={props.icon} type={props.iconType} /> : props.label;

  if (props.link) {
    return (
      <Link to={props.link} className={`${cssClass} ${cssClass}--${props.type}`}>
        {content}
      </Link>
    );
  } else {
    return (
      <button className={`${cssClass} ${cssClass}--${props.type}`}>
        {content}
      </button>
    );
  }
}

export default Cta;
