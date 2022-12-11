import React from 'react';

const PrimaryButton = ({children,classname='',onClick=null}) => {
    return (
        <button onClick={onClick} className={`${classname} bg-gradient-to-r from-bootstrap to-tailwind`}>{children}</button>
    );
};

export default PrimaryButton;