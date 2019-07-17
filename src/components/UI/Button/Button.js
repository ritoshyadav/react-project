import React from 'react';
import './Button.css';

const button = (props) => (
    <div className="Button">
        <button className={props.btnType}
            onClick={props.clicked}>{props.children}</button>
    </div>
);

export default button;