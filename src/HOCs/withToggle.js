import React, {useState} from 'react';

function WithToggle(OriginalComponent) {
    const NewComponent = (props) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);

        return <OriginalComponent isOpen={isOpen} toggle={toggle} {...props} />;
    }
    return NewComponent;
}

export default WithToggle;