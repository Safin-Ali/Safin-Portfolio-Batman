import React from 'react';

const PrimaryButton = ({children,classname=''}) => {
    return (
        <button className={`${classname}`}>{children}</button>
    );
};

export default PrimaryButton;