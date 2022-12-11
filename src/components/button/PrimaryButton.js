import React from 'react';

const PrimaryButton = ({children,classname=''}) => {
    return (
        <button className={`${classname} bg-gradient-to-r from-bootstrap to-tailwind`}>{children}</button>
    );
};

export default PrimaryButton;