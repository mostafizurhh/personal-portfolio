import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary transition ease-in-out  bg-gradient-to-r from-primary via-info to-secondary text-white hover:from-[#B83B5E] hover:via-primary hover:to-[#C06C84] hover:bg-gradient-to-l hover:-translate-y-1 hover:scale-110 duration-75">{children}</button>
        </div>
    );
};

export default PrimaryButton;