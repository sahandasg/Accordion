import React from 'react';
import withToggle from "../HOCs/withToggle";

const Question = ({id, title, info, isOpen, toggle}) => {
    return (
        <div onClick={toggle} className="border border-2 rounded mt-md-5 w-100">
            <div className="d-flex align-items-center justify-content-between gap-5 p-2">
                <h3>{title}</h3>
                <button className="border-0 p-2 px-3 rounded">+</button>
            </div>
            {isOpen && <p className="p-2">{info}</p>}
        </div>);
}

export default withToggle(Question);